let arr =["Ayan","Bilal"]

function arrdisplay(){
    document.getElementById("Display").innerHTML ="Array:"+arr;
}
arrdisplay();

function Add(){
    let element = prompt("Please Enter Name");
    let index = prompt("Please Enter Position");
    arr.splice(Number(index),0,element);
    arrdisplay();
}
function Delete(){
    let index = prompt("Please Enter Position");
    arr.splice(Number(index),1);
    arrdisplay();
}
function Update(){
    let index = prompt("Please Enter Position");
    let NewValue = prompt("Please Enter New Value");
    arr.splice(Number(index),1,NewValue);
    arrdisplay();
}