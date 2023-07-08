let arr = ["html","css","Javascript","React","Angular"];
let selector = document.getElementById("selector");

for (let index = 0; index < arr.length; index++) {
    selector.textContent += arr[index]
    if(index<arr.length-1){
        selector.textContent += ", "
    }
    
}