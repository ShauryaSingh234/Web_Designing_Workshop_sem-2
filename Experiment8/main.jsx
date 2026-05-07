var count = 0;
function inc(){
    count++;
    let output = count;
    document.getElementById("output").innerHTML = output;
}
function dec(){
    count--;
    let output = count;
    document.getElementById("output").innerHTML = output;
}
function res(){
    count = 0;
    document.getElementById("output").innerHTML = count;
}