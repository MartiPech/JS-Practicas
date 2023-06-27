const arr = ["zapallo", "maria luz ", "belen"];

let text = "";
for (let index = 0; index < arr.length; index++) {
     text += `<li>` + arr[index]+ "</li>";
    
}
document.getElementById("selector").innerHTML =text;