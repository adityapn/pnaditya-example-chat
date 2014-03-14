_.templateSettings = {
    interpolate : /\{\{(.+?)\}\}/g
  };
  var MessagesView = Backbone.View.extend({
    el: '#messagesContainer',
    initialize: function () {
        this.collection.on('add', this.render, this);
        this.render();
    },
    template: _.template("<div><p><b>{{ username }}: </b>{{ message }}</p></div>"),
    render: function () {
        this.$el.html("");
        this.collection.each(function(msg){            
            this.$el.append(this.template(msg.toJSON()));
        }, this)
    }
});