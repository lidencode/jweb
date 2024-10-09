jWeb.extend('dom', {
    attr: {
        get: function(el, key) {
            return el.getAttribute(key);
        },

        set: function(el, key, value) {
            return el.setAttribute(key, value);
        }
    },

    class: {
        add: function(el, className) {
            el.classList.add(className);
        },

        has: function(el, className) {
            el.classList.contains(className);
        },

        remove: function(el, className) {
            el.classList.remove(className);
        }
    },

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

    html: function(el, html) {
        if (typeof html == "undefined") {
            /* return element outer html */
            return el.outerHTML;
        } else {
            /* replace element outer html */
            el.outerHTML = html;
        }
    },

    filters: {
        check: function(query, filters, enableCallback, disableCallback) {
            jWeb.func.foreach(filters, function(key, value) {

            });
        }
    },

    find: function(query) {
        return document.querySelectorAll(query);
    }
});