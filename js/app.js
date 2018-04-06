const controller = (function(budgetCtrl, UICtrl) {

  const setupEventListeners = () => {
    const DOM = UICtrl.DOMStrings;    

    document.querySelector(DOM.inputBtn).addEventListener('click', ctlrAddItem);

    document.addEventListener('keypress', event => event.keycode === 13 || event.which === 13 ? ctlrAddItem() : null );
  };


  const ctlrAddItem = () => {

    // 1. Get the field input data
    const input = UICtrl.getInput();

    // 2. Add the item to the budget controller
    const newItem = budgetCtrl.addItem(input.type, input.description, input.value);

    // 3. Add the new item to the UI
    UICtrl.addListItem(newItem, input.type);

    // 4. Calculate the budget

    // 5. Display the budget on the UI

  };

  return {
    init: () => {
      console.log('Application has started.');
      setupEventListeners();
    }
  };

})(budgetController, UIController); 

controller.init();