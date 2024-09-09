jWeb.extend('ajax', {
    call: function(url, config, params, callback) {

    },

    get: function(url, params, callback) {
        return jWeb.ajax.call(url, {method: 'GET'}, params, callback);
    },

    post: function(url, params, callback) {
        return jWeb.ajax.call(url, {method: 'POST'}, params, callback);
    }
});