const UIController = (function() {

  return {
    getInput: function() {
      const type = document.querySelector('.add__type').value; // Will be either inc or exp
      const description = document.querySelector('.add__description').value;
      const value = document.querySelector('.add__value').value;

      return {
        type,
        description,
        value
      }
    }
  };

})();