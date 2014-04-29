Shenanigans.Router.map(function() {
  this.resource('tables', { path: '/' });
  this.route('foods', { path: '/' });
});

Shenanigans.TablesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('table');
  }
});
