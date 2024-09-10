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
});