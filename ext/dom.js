jWeb.extend('dom', {
    each: function(query, callback) {
        return document.querySelectorAll(query).forEach(callback);
    },

    find: function(query) {
        return document.querySelectorAll(query);
    },

    css: {
        show: function(el) {
            el.style.display = '';
        },

        hide: function(el) {
            el.style.display = 'none';
        }
    }
});