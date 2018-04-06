const controller = (function(budgetCtrl, UICtrl) {

  const setupEventListeners = () => {
    const DOM = UICtrl.DOMStrings;    

    document.querySelector(DOM.inputBtn).addEventListener('click', ctlrAddItem);

    document.addEventListener('keypress', event => event.keycode === 13 || event.which === 13 ? ctlrAddItem() : null );
  };

  const updateBudget = () => {

    // 1. Calculate the budget
    budgetCtrl.calculateBudget();

    // 2. Return the budget
    const budget = budgetCtrl.getBudget();

    // 3. Display the budget on the UI
    UICtrl.displayBudget(budget);

  }

  const ctlrAddItem = () => {

    // 1. Get the field input data
    const input = UICtrl.getInput();

    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // 2. Add the item to the budget controller
      const newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3. Add the new item to the UI
      UICtrl.addListItem(newItem, input.type);

      // 4. Clear the fields
      UICtrl.clearFields();

      // 5. Calculate and update budget
      updateBudget();
    }

  };

  return {
    init: () => {
      console.log('Application has started.');
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      });      
      setupEventListeners();
    }
  };

})(budgetController, UIController); 

controller.init();