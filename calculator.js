function bclick(val) {
  document.getElementById('screen').value += val;
}
function clr() {
  document.getElementById('screen').value = '';
}
function eqltu() {
  var inputText = document.getElementById('screen').value;
  var result = eval(inputText);
  document.getElementById('screen').value = result;
}

// eval will evaluate ==>eval(document.getElemntbyId(whereToDisplay).value)