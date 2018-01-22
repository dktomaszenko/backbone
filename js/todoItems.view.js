var TodoItemsView = Backbone.View.extend({
    tagName: 'ul',
    id: 'todoItem',
    initialize: function (options) {
        if (!(options && options.model)) {
            throw new Error('model is not specified');
        }
        this.model.on('add', this.onAddTodoItem, this);
    },
    onAddTodoItem: function (todoItem) {
      console.log('Added');
    },
    events: {
        'click #add': 'onClickAdd'
    },
    onClickAdd: function () {
        var todoItem = new TodoItem({description: 'New Todo Item'});
        this.model.add(todoItem);
    },
    render: function () {
        var self = this;

        this.$el.append('<button id="add">Add</button>');

        this.model.each(function (todoItem) {
            var view = new TodoItemView({model: todoItem});
            self.$el.append(view.render().$el);
        });

        return this;
    }
});