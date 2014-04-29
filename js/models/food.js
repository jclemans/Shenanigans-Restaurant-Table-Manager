Shenanigans.Food = DS.Model.extend ({
  tables: DS.hasMany('table'),
  foodName: DS.attr('string'),
  cost: DS.attr('number')
});

Shenanigans.Food.FIXTURES = [
  {
    id: 1,
    foodName: "Pizza",
    cost: 15.00
  },
  {
    id: 2,
    foodName: "Pancakes",
    cost: 8.75
  },
  {
    id: 3,
    foodName: "Fries",
    cost: 2.99
  }
];
