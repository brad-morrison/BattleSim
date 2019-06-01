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
    var row0 = {type: "Infantry", rank: "Rank 1"};
    
    // create row
    var x = document.createElement("DIV");
    x.innerHTML = rowObj;
    x.id = "row0";
    x.className = "row";
    document.getElementById('scroll-main').appendChild(x);
    
    // add data to row
    var c = document.getElementById('row0').children;
    c[0].innerHTML = row0.type;
    c[1].innerHTML = row0.rank;
    
    //set id to not new
    x.id = "row";
    
}