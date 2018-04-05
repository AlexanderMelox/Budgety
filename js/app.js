const controller = (function(budgetCtrl, UICtrl) {

  const ctlrAddItem = () => {

    // 1. Get the field input data

    // 2. Add the item to the budget controller

    // 3. Add the new item to the UI

    // 4. Calculate the budget

    // 5. Display the budget on the UI

    console.log(1);

  }

  document.querySelector('.add__btn').addEventListener('click', ctlrAddItem);

  document.addEventListener('keypress', event => event.keycode === 13 || event.which === 13 ? ctlrAddItem() : null );

})(budgetController, UIController); 