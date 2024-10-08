jWeb.extend('func', {
    foreach: function(items, callback) {
        for (const [key, value] of Object.entries(items)) {
            callback(key, value);
        }
    }
});