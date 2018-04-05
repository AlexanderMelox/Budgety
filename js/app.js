const controller = (function(budgetCtrl, UICtrl) {

  const DOM = UICtrl.DOMStrings;

  const ctlrAddItem = () => {

    // 1. Get the field input data
    const input = UICtrl.getInput();
    console.log(input);

    // 2. Add the item to the budget controller

    // 3. Add the new item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI

  }

  document.querySelector(DOM.inputBtn).addEventListener('click', ctlrAddItem);

  document.addEventListener('keypress', event => event.keycode === 13 || event.which === 13 ? ctlrAddItem() : null );

})(budgetController, UIController); 