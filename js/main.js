$(document).ready(function () {
    var todoItems = new TodoItems([
        new TodoItem({description: 'TodoItem 1'}, {validate:true}),
        new TodoItem({description5: 'TodoItem 2'}, {validate:true})
    ]);

    var todoItemsView = new TodoItemsView({model: todoItems});
    $('body').append(todoItemsView.render().$el);

});