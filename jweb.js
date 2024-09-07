let jWeb = {
    extend: function(name, object) {
        this[name] = object;
    },

    fn: {
        version: function() {
            return 0.1;
        }
    }
}