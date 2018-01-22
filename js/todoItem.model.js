var TodoItem = Backbone.Model.extend({
    defaults: {
        isComplete: false
    },
    url: 'fakeUrl',
    validate: function (attrs) {
        if (!attrs.description) {
            return 'Description is required.';
        }
    },
    toggle: function () {
        this.set('isComplete', !this.get('isComplete'));
    }
});