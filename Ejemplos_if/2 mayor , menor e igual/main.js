let a = parseInt(prompt("ingrese numero a"));
let b = parseInt(prompt("ingrese numero b"));

if(a>b){
    let resta= a-b;
    alert("caso A a>b "+ resta );
}else if (a==b){
    let suma = a+b;
    alert("caso B a==b " +suma);
}else if(a<b){
    let producto= a*b;
    alert("caso C  a<b " + producto);
};