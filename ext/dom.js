jWeb.extend('dom', {
    each: function(query, callback) {
        return document.querySelectorAll(query).forEach(callback);
    },

    find: function(query) {
        return document.querySelectorAll(query);
    }
});