// var para = prompt("TEll Me Something I Don't Know");
// for (var i = 0; i < para.length; i++) {
//     if (para.slice(i, i + 2) === " ") {
//         alert("No Double Spaces!");
//         break;
//     }
// }

var ammoniation = document.getElementById("ammoniation");
for (var i = 0; i < ammoniation.length; i++) {
    if (ammoniation.slice(i, i + 4) === "salt") {
        document.getElementById("ammoniation").innerHTML = ammoniation.slice(0, i) + "NaCl" + ammoniation.slice(i + 5);
    }
}