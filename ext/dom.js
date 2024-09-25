jWeb.extend('dom', {
    each: function(query, callback) {
        return document.querySelectorAll(query).forEach(callback);
    },

    find: function(query) {
        return document.querySelectorAll(query);
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
        }
    }
});