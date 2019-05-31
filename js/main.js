var A_Infantry = 0;

function clicked() {
    console.log("clicked");
    document.getElementById('over').style.visibility = "visible";
}

function closeWindow() {
    console.log("close-clicked");
    document.getElementById('over').style.visibility = "hidden";
}

function addTo(type) {
    
    if (type == "infantry")
    {
        // create infantry row
        var row = document.createElement("DIV");
        row.innerHTML = "Infantry";
        row.className = "row";
        document.getElementById('scroll-main').appendChild(row);
        
        // set count label on home screen
        A_Infantry++;
        document.getElementById('A_Infantry_Count').innerHTML = A_Infantry;
    }
}