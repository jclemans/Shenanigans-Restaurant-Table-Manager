Shenanigans.FoodsController = Ember.ArrayController.extend({
  actions: {
    createFood: function() {
      var foodName = this.get('newName'),
          cost = this.get('newCost');
      if (!foodName.trim()) { return; }
      if (!cost.trim()) { return; }

      var food = this.store.createRecord('food', {
        foodName: foodName,
        cost: cost
      });

      this.set('newfoodName', ''),
      this.set('newCost', '');

      food.save();
    }
  }
});
