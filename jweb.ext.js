jWeb.extend('ajax', {
    call: function(url, config, params, callback) {
        const xhr = new XMLHttpRequest();
        let queryString = '';
        let method = 'GET';
        if (!params) params = {};

        if (typeof config.method == 'string' && config.method.toUpperCase() === 'POST') {
            method = 'POST';
        }

        if (method === 'GET') {
            queryString = '?' + params.map(param => encodeURIComponent(param[0]) + '=' + encodeURIComponent(param[1])).join('&');
        }

        xhr.open(method.toUpperCase(), url + queryString, true);

        if (method === 'POST') {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    callback(null, xhr.responseText);
                } else {
                    callback(xhr.statusText, null);
                }
            }
        };

        if (method === 'POST') {
            const postData = params.map(param => encodeURIComponent(param[0]) + '=' + encodeURIComponent(param[1])).join('&');
            xhr.send(postData);
        } else {
            xhr.send();
        }
    },

    get: function(url, params, callback) {
        return jWeb.ajax.call(url, {method: 'GET'}, params, callback);
    },

    post: function(url, params, callback) {
        return jWeb.ajax.call(url, {method: 'POST'}, params, callback);
    }
});jWeb.extend('dom', {
    css: {
        display: {
            show: function(el) {
                el.style.display = '';
            },

            hide: function(el) {
                el.style.display = 'none';
            },

            toggle: function(el) {
                if (el.style.display == 'none') {
                    el.style.display = '';
                } else {
                    el.style.display = 'none';
                }
            }
        },
    },

    each: function(query, callback) {
        return document.querySelectorAll(query).forEach(callback);
    },

    filters: {
        filter: function(query, filters, enableCallback, disableCallback) {
            jWeb.func.foreach(filters, function(key, value) {
               console.log('key: '+key);
                console.log('value: '+value);
            });
        }
    },

    find: function(query) {
        return document.querySelectorAll(query);
    }
});jWeb.extend('func', {
    foreach: function(items, callback) {
        for (const [key, value] of Object.entries(items)) {
            callback(key, value);
        }
    }
});jWeb.extend('wpo', {
    fontAwesome: {
        improve: function(path) {
            var folders = ['brands', 'duotone', 'light', 'regular', 'sharp-light', 'sharp-regular',
                'sharp-solid', 'sharp-thin', 'solid', 'thin'];

            var styles = [
                '.wpo-fa-icon::before {' +
                ' content: "";' +
                ' display: inline-block;' +
                ' width: 1em;' +
                ' height: 1em;' +
                ' background-color: currentColor;' +
                ' mask-size: contain;' +
                ' vertical-align: middle;' +
                ' margin-top: -0.2em; }'
            ];

            for (var i = 0; i < folders.length; i++) {
                var folder = folders[i];

                document.querySelectorAll('.fa-' + folder).forEach((el, i) => {
                    var otherClass = Array.from(el.classList)
                        .filter(item => item !== 'fa-' + folder);

                    var faClass = otherClass.find(cls => cls.startsWith('fa-'));

                    var icon = faClass.replace('fa-', '') + '.svg';
                    var iconPath = path + '/' + folder + '/' + icon;

                    var customClass = 'wpo-' + faClass;
                    styles.push('.' + customClass + '::before { mask: url("' + iconPath + '") center no-repeat; } ')
                    el.classList.add(customClass);
                    el.classList.add('wpo-fa-icon');
                    el.classList.remove(faClass);
                    el.classList.remove('fa-' + folder);
                });
            }

            const style = document.createElement('style');
            style.innerHTML = styles.join(' ');
            document.head.appendChild(style);
        }
    }
});