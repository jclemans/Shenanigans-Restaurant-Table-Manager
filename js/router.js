Shenanigans.Router.map(function() {
  this.resource('index', { path: '/' });
});

Shenanigans.IndexRoute = Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      tables: this.store.find('table'),
      foods: this.store.find('food')
    })
  }
});
