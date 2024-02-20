/* 
    thier have 4 type of statement 
    for output in java script see below.
*/



// function output_statement(){
//     alert("Hello world");
//     document.writeln("Hello World");
//     console.log("Hello World");
//     //innerHTML 
//     var n = 5;
//     var m = 4;
//     var z = n+m;
//     document.writeln("\n z = "+z);
// }

function colorMe(){
    document.body.style.backgroundColor = "#fa8787";
}

function change_color(){
    var h1 = document.getElementById("color_change")
    h1.style.color = "green";
    h1.style.fontSize = "50px";
    h1.style.backgroundColor = "white";
    h1.style.border = "2px solid black";
}

var record = {
    fName: "adnan",
    lName: "shehzad",
    class: "5th",
    rollNo: 34,
    marks: 90
}

console.log(record);