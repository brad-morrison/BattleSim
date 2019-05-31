var A_Infantry = 0;
var rowObj =    '<p class="row-name"></p>' +
                '<p class="row-rank"></p>' +
                '<div class="row-buttons">' +
                '<button class="row-button rankup-button">+</button>' +
                '<button class="row-button rankdown-button">-</button>' +
                '<button class="row-button delete-button">X</button>' +
                '</div>';
    
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
        /*var row = document.createElement("DIV");
        row.innerHTML = "Infantry";
        row.className = "row";
        document.getElementById('scroll-main').appendChild(row);*/
        createInfantry();
        
        // set count label on home screen
        A_Infantry++;
        document.getElementById('A_Infantry_Count').innerHTML = A_Infantry;
    }
}

function createInfantry() {
    var row = {type: "Infantry", rank: "1"};
    
    // create row
    var x = document.createElement("DIV");
    x.innerHTML = rowObj;
    x.id = "rowObjNew";
    x.className = "row";
    document.getElementById('scroll-main').appendChild(x);
    
    // add data to row
    
    
}