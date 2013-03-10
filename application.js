window.Application = {};

Application.View = Backbone.View.extend({
  render: function() {
    var context = this.model ? this.model.attributes : {},
        output = this.options.template(context);
    this.$el.html(output);
  }
});

$(function() {
  var model = new Backbone.Model({
    greeting: 'Hello'
  });
  var indexView = new Application.View({
    template: Handlebars.templates['/views/index'],
    model: model
  });
  indexView.render();
  $('body').append(indexView.el);
});
