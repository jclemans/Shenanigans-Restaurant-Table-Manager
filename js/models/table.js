Shenanigans.Table = DS.Model.extend ({
  foods: DS.hasMany('food',{ async: true }),
  tableNumber: DS.attr('string')
});

Shenanigans.Table.FIXTURES = [
  {
    id: 1,
    tableNumber: "1",
    foods: [1, 2, 3]
  },
  {
    id: 2,
    tableNumber: "2"
  },
  {
    id: 3,
    tableNumber: "3"
  }
];
