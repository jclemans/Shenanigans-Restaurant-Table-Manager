Shenanigans.TableController = Ember.ObjectController.extend({
  actions: {
    removeTable: function() {
      var table = this.get('model');
      table.deleteRecord();
      table.save();
    }
  }
});
