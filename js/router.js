Shenanigans.Router.map(function() {
  this.resource('tables', { path: '/' }, function() {
    this.resource('table', { path: 'tables/:table_id' });
    //this.route('foods');
  });
});

Shenanigans.TablesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('table')
  }
});

Shenanigans.TableRoute = Ember.Route.extend({
  model: function(params) {
    var table = this.get('table');
    return this.store.find('table', params.table_id);
  }
});



//Shenanigans.ApplicationRoute

// Shenanigans.TablesIndexRoute = Ember.Route.extend({
//   model: function() {
//     return this.modelFor('tables');
//   }
// });



    //setupController: function(controller, model) {
   // controller.set('model', model);
    // this.controllerFor('food').set('model', this.store.find('food'))

