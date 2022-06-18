const max = 57;
let actual = max - 13;
let percentage = actual / max;
console.log(percentage.toFixed(4));
let myStr = "Hello mage raththaran yaluvane!";
console.log(myStr.substring(0, 4))
document.getElementById("js").innerHTML = myStr.slice(7);
let newTxt = myStr.padEnd(4, "i");
document.getElementById("replace").innerHTML = newTxt;