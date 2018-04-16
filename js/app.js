const controller = (function(budgetCtrl, UICtrl) {

  const setupEventListeners = () => {
    // Loads DOM elements
    const DOM = UICtrl.DOMStrings;    

    // Sets up click to add item to budget
    document.querySelector(DOM.inputBtn).addEventListener('click', ctlrAddItem);

    // Checks if the user presses the 'enter' key to add an item to budget
    document.addEventListener('keypress', event => event.keycode === 13 || event.which === 13 ? ctlrAddItem() : null );

    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
  };

  const updateBudget = () => {

    // 1. Calculate the budget
    budgetCtrl.calculateBudget();

    // 2. Return the budget
    const budget = budgetCtrl.getBudget();

    // 3. Display the budget on the UI
    UICtrl.displayBudget(budget);

  };

  const updatePercentages = () => {

    // 1. Calculate percentages

    // 2. Read percentages from the budget controller

    // 3. Update the UI with the new percentages

  };

  const ctlrAddItem = () => {

    // 1. Get the field input data
    const input = UICtrl.getInput();

    // Validates if the description is not empty, the value is a number and is greater than 0
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // 2. Add the item to the budget controller
      const newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3. Add the new item to the UI
      UICtrl.addListItem(newItem, input.type);

      // 4. Clear the fields
      UICtrl.clearFields();

      // 5. Calculate and update budget
      updateBudget();

      // 6. Calculate and update the percentages
      updatePercentages();
    }

  };

  const ctrlDeleteItem = (event) => {

    const itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {

      const splitID = itemID.split('-');
      const type = splitID[0];
      const ID = parseInt(splitID[1]);

      // 1. Delete the item from the data structure
      budgetCtrl.deleteItem(type, ID);

      // 2. Delete the item from the UI
      UICtrl.deleteListItem(itemID);

      // 3. Update and show the new budget
      updateBudget();

      // 4. Calculate and update percentages
      updatePercentages();

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