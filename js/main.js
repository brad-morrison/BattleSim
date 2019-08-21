/* HTML Objects */
var rowObj =    '<p class="row-name"></p>' +
                '<p class="row-rank"></p>' +
                '<div class="row-buttons">' +
                '<button class="row-button rankup-button" onclick="addRank(this.parentElement.parentElement.children[1])">+</button>' +
                '<button class="row-button rankdown-button" onclick="lowerRank(this.parentElement.parentElement.children[1])">-</button>' +
                '<button class="row-button delete-button" onclick="deleteRow(this.parentElement.parentElement)">X</button>' +
                '</div>';

/* JS Variables */

// unit constructor
function unit(type, rank)
{
    this.type = type;
    this.rank = rank;
}

// arrays of units
var a_infantry = [];
var a_archers = [];
var a_pikemen = [];
var a_cavalry = [];

// UI variables
var openWindow;

    
function clicked(reg) {
    document.getElementById('over').style.visibility = "visible";
    loadWindowData(reg);
}

function closeWindow() {
    console.log("close-clicked");
    document.getElementById('over').style.visibility = "hidden";
    // set count labels on home screen
    document.getElementById('A_Infantry_Count').innerHTML = a_infantry.length;
    document.getElementById('A_Archers_Count').innerHTML = a_archers.length;
    document.getElementById('A_Pikemen_Count').innerHTML = a_pikemen.length;
    document.getElementById('A_Cavalry_Count').innerHTML = a_cavalry.length;
}

function loadWindowData(reg) {
    
    // set title
    document.getElementById('over-title').innerHTML = reg;
    
    //clear prev data
    document.getElementById('scroll-main').innerHTML = "";
    
    // set correct array
    if (reg == "infantry")
    {
        var unitSet = a_infantry;   
    }
    
    if (reg == "archers")
    {
        var unitSet = a_archers;
    }
    
    if (reg == "pikemen")
    {
        var unitSet = a_pikemen;
    }
    
    if (reg == "cavalry")
    {
        var unitSet = a_cavalry;
    }
    
    // loop to load data
    for (i=0; i<unitSet.length; i++)
    {
        //createUnit(reg);
        fetchUnits(unitSet, i);
    }
    
    // alert which window is open
    openWindow = reg;
    
}

function fetchUnits(set, index)
{
    // create row
    var x = document.createElement("DIV");
    x.innerHTML = rowObj;
    x.id = "row" + (index+1);
    x.className = "row";
    document.getElementById('scroll-main').appendChild(x);
    
    // add data to row
    var c = x.children;
    c[0].innerHTML = set[i].type;
    c[1].innerHTML = "Rank " + set[i].rank;
}

function addTo() {
    
    var type = document.getElementById('over-title').innerHTML;
    
    if (type == "infantry")
    {
        // create infantry row
        createUnit("infantry");
        
        // add to array
        var freshUnit = new unit("infantry", 1);
        a_infantry.push(freshUnit);
        console.log(a_infantry);
        
        // set count label on home screen
        document.getElementById('A_Infantry_Count').innerHTML = a_infantry.length;
    }
    
    if (type == "archers")
    {
        // create infantry row
        createUnit("archers");
        
        // add to array
        var freshUnit = new unit("archers", 1);
        a_archers.push(freshUnit);
        console.log(a_archers);
        
        // set count label on home screen
        document.getElementById('A_Archers_Count').innerHTML = a_archers.length;
    }
    
    if (type == "pikemen")
    {
        // create infantry row
        createUnit("pikemen");
        
        // add to array
        var freshUnit = new unit("pikemen", 1);
        a_pikemen.push(freshUnit);
        console.log(a_pikemen);
        
        // set count label on home screen
        document.getElementById('A_Pikemen_Count').innerHTML = a_pikemen.length;
    }
    
    if (type == "cavalry")
    {
        // create infantry row
        createUnit("cavalry");
        
        // add to array
        var freshUnit = new unit("cavalry", 1);
        a_cavalry.push(freshUnit);
        console.log(a_cavalry);
        
        // set count label on home screen
        document.getElementById('A_Cavalry_Count').innerHTML = a_cavalry.length;
    }
}

function createUnit(unitType) {
    var row0 = {type: unitType, rank: "Rank 1"};
    
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
    
    //work out row number and set id accordingly
    var childCount = document.getElementById('scroll-main').childElementCount;
    x.id = "row" + childCount;
}

function addRank(element) {
    
    // get elements parent and row id
    var row = element.parentElement;
    var rowName = row.id;
    var chosenIndex = rowName.slice(3);
    
    //if statements to change correct array item
    if (openWindow == "infantry")
    {
        if (a_infantry[chosenIndex-1].rank < 3) {a_infantry[chosenIndex-1].rank++;} // if rank is < 3 add to rank
    }
    
    if (openWindow == "archers")
    {
        if (a_archers[chosenIndex-1].rank < 3) {a_archers[chosenIndex-1].rank++;}
    }
    
    if (openWindow == "pikemen")
    {
        if (a_pikemen[chosenIndex-1].rank < 3) {a_pikemen[chosenIndex-1].rank++;}
    }
    
    if (openWindow == "cavalry")
    {
        if (a_cavalry[chosenIndex-1].rank < 3) {a_cavalry[chosenIndex-1].rank++;}
    }
    
    
    //HTML changes
    var curRank = element.innerHTML;
    
    if (curRank == "Rank 1")
    {
        element.innerHTML = "Rank 2";
    }
    
    if (curRank == "Rank 2")
    {
        element.innerHTML = "Rank 3";
    }
}

function lowerRank(element) {
    
    // get elements parent and row id
    var row = element.parentElement;
    var rowName = row.id;
    var chosenIndex = rowName.slice(3);
    
    //if statements to change correct array item
    if (openWindow == "infantry")
    {
        if (a_infantry[chosenIndex-1].rank >= 2) {a_infantry[chosenIndex-1].rank--;} // if rank is < 3 add to rank
    }
    
    if (openWindow == "archers")
    {
        if (a_archers[chosenIndex-1].rank >= 2) {a_archers[chosenIndex-1].rank--;}
    }
    
    if (openWindow == "pikemen")
    {
        if (a_pikemen[chosenIndex-1].rank >= 2) {a_pikemen[chosenIndex-1].rank--;}
    }
    
    if (openWindow == "cavalry")
    {
        if (a_cavalry[chosenIndex-1].rank >= 2) {a_cavalry[chosenIndex-1].rank--;}
    }
    
    // HTML changes
    var curRank = element.innerHTML;
    
    if (curRank == "Rank 3")
    {
        element.innerHTML = "Rank 2";
    }
    
    if (curRank == "Rank 2")
    {
        element.innerHTML = "Rank 1";
    }
}

function deleteRow(element) {
    
    // work out index to remove
    var rowName = element.id;
    var indexToRemove = rowName.slice(3);
    
    //if statements to remove from correct array
    if (openWindow == "infantry")
    {
        a_infantry.splice(indexToRemove-1, 1);
    }
    
    if (openWindow == "archers")
    {
        a_archers.splice(indexToRemove-1, 1);
    }
    
    if (openWindow == "pikemen")
    {
        a_pikemen.splice(indexToRemove-1, 1);
    }
    
    if (openWindow == "cavalry")
    {
        a_cavalry.splice(indexToRemove-1, 1);
    }
    
    //get number of rows before deletion
    var rows = document.getElementById('scroll-main').childNodes;
    
    // delete HTML row
    element.parentNode.removeChild(element);
    
    // cycle and rename rows in order
    for (i=0; i<rows.length; i++)
    {
        rows[i].id = "row" + (i+1);  
        console.log(rows[i]);
    }
    
    
}