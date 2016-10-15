var comp = Math.random();
function open() {
    
    if (comp > 0.55) {
        document.getElementById("cat").src="images/cat-alive.jpg";
        console.log(comp);
    }
    else {
        document.getElementById("cat").src="images/cat-dead.png";
        console.log(comp);
    }
}