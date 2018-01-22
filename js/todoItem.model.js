var TodoItem = Backbone.Model.extend({
    validate: function (attrs) {
        if (!attrs.description) {
            console.log('Description is required.');
            return false;
        }
    }
});