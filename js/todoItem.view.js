var TodoItemView = Backbone.View.extend({
    tagName: 'li',
    initialize: function (options) {
      if(!(options && options.model))
          throw new Error('model is not specified.');

      this.model.on('change', this.render, this);

    },
    events: {
      'click #toggle': 'onClickToggle'
    },
    onClickToggle: function () {
      this.model.toggle();
      console.log(this.model.toJSON());
    },
    render: function () {
        var a = this.model.get('isComplete');
        this.$el.toggleClass('complete',a );

        var checked = this.model.get('isComplete') ? 'checked' : '';
        this.$el.html('<input id="toggle" type="checkbox" ' + checked + ' />  ' + this.model.escape('description'));
        return this;
    }
});