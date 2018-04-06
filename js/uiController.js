const UIController = (function() {

  const DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn',
    incomeContainer: '.income__list',
    expenseContainer: '.expenses__list',
    budgetLabel: '.budget__value',
    incomeLabel: '.budget__income--value',
    expensesLabel: '.budget__expenses--value',
    percentageLabel: '.budget__expenses--percentage'
  };

  return {
    getInput: () => {
      const type = document.querySelector(DOMStrings.inputType).value; // Will be either inc or exp
      const description = document.querySelector(DOMStrings.inputDescription).value;
      const value = parseFloat(document.querySelector(DOMStrings.inputValue).value);

      return {
        type,
        description,
        value
      }
    },
    addListItem: function(obj, type) {
      let html;
      let newHtml;
      let element;

      // 1. Create HTML string with placaholder text

      if (type === 'inc') {
        element = DOMStrings.incomeContainer;
        html = `
          <div class="item clearfix" id="income-%id%">
            <div class="item__description">%description%</div>
            <div class="right clearfix">
              <div class="item__value">%value%</div>
              <div class="item__delete">
                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
              </div>
            </div>
          </div>`;
      } else if (type === 'exp') {
        element = DOMStrings.expenseContainer;

        html = `
          <div class="item clearfix" id="expense-%id%">
            <div class="item__description">%description%</div>
            <div class="right clearfix">
              <div class="item__value">%value%</div>
              <div class="item__percentage">21%</div>
              <div class="item__delete">
                <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
              </div>
            </div>
          </div>`;
      }

      // 2. Replace the placeholder test with some actual data
      newHtml = html.replace('%id%', obj.id);
      newHtml = newHtml.replace('%description%', obj.description);
      newHtml = newHtml.replace('%value%', obj.value);

      // 3. Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);

    },
    clearFields: () => {
      const fields = document.querySelectorAll(`${DOMStrings.inputDescription} , ${DOMStrings.inputValue}`);

      const fieldsArr = Array.prototype.slice.call(fields);

      fieldsArr.forEach(item => item.value = '');

      fieldsArr[0].focus();

    },
    displayBudget: (obj) => {

      document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExp;
      

      if (obj.percentage > 0) {
        document.querySelector(DOMStrings.percentageLabel).textContent = `${obj.percentage}%`;
      } else {
        document.querySelector(DOMStrings.percentageLabel).textContent = '---';
      }

    },
    DOMStrings
  };

})();