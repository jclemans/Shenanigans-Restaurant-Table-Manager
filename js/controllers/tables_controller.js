Shenanigans.TablesController = Ember.ArrayController.extend({
  actions: {
    createTable: function() {
      var tableNumber = this.get('newNumber');
      if (!tableNumber.trim()) { return; }

      var table = this.store.createRecord('table', {
        tableNumber: tableNumber
      });

      this.set('newNumber', '');

      table.save();
    }
  }
});
