window.addEventListener('load', init);

function init() {
  let $ = function (id) {
    'use strict';
    return window.document.getElementById(id);
  };
  let allButtons = $('allButtons');
  let result = $('result');
  let equal = $('equal');
  
  allButtons.addEventListener('click', enter); 
  function enter(num) {
    window.console.log(num.target.value);
    $(result).value += num.target.value;
  }
  function calculate(num) {
    $('result').value += num.target.value;
    console.log(num.target.value);
  }
  equal.addEventListener('click', function calculate() {
    $('result').value = evaluate($('result').value);
  })
}
