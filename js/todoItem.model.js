var TodoItem = Backbone.Model.extend({
    default: {
        isComplete: false
    },
    validate: function (attrs) {
        if (!attrs.description) {
            return 'Description is required.';
        }
    },
    toggle: function () {
        this.set('isComplete', !this.get('isComplete'));
    }
});