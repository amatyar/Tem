function convertToC() {
var fTempVal = parsefloat(document.getElementById('fTemp').value);
var cTempVal = (fTempVal - 32) * (5/9);

document.getElementById('cTemp').value = cTempVal;
return false;
}
function convertToF() {
var cTemp = parsefloat(document.getElementById('cTemp').value);
var fToFahr = (cTemp * (9/5)) + 32;

document.getElementById('fTemp').value = fToFahr;
}
