jWeb.extend('dom', {
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
               
            });
        }
    },

    find: function(query) {
        return document.querySelectorAll(query);
    }
});