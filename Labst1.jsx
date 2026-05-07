function start(){
    let n = document.getElementById("userInput").value;
    let output = "";
    for (let i = n; i >= 1; i--){
        output += i + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}