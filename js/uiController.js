const UIController = (function() {

  const DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }

  return {
    getInput: function() {
      const type = document.querySelector(DOMStrings.inputType).value; // Will be either inc or exp
      const description = document.querySelector(DOMStrings.inputDescription).value;
      const value = document.querySelector(DOMStrings.inputValue).value;

      return {
        type,
        description,
        value
      }
    },
    DOMStrings
  };

})();