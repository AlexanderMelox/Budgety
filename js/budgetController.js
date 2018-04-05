const budgetController = (function() {

  const Expense = function(id, description, value)  {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  const Income = function(id, description, value)  {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  const data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  }

})();