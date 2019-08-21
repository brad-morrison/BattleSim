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
var b_infantry = [];
var b_archers = [];
var b_pikemen = [];
var b_cavalry = [];

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
    document.getElementById('B_Infantry_Count').innerHTML = b_infantry.length;
    document.getElementById('B_Archers_Count').innerHTML = b_archers.length;
    document.getElementById('B_Pikemen_Count').innerHTML = b_pikemen.length;
    document.getElementById('B_Cavalry_Count').innerHTML = b_cavalry.length;
}

function loadWindowData(reg) {
    
    // set title
    document.getElementById('over-title').innerHTML = reg;
    
    //clear prev data
    document.getElementById('scroll-main').innerHTML = "";
    
    // set correct array
    if (reg == "a_infantry")
    {
        var unitSet = a_infantry;   
    }
    
    if (reg == "a_archers")
    {
        var unitSet = a_archers;
    }
    
    if (reg == "a_pikemen")
    {
        var unitSet = a_pikemen;
    }
    
    if (reg == "a_cavalry")
    {
        var unitSet = a_cavalry;
    }
    
    if (reg == "b_infantry")
    {
        var unitSet = b_infantry;   
    }
    
    if (reg == "b_archers")
    {
        var unitSet = b_archers;
    }
    
    if (reg == "b_pikemen")
    {
        var unitSet = b_pikemen;
    }
    
    if (reg == "b_cavalry")
    {
        var unitSet = b_cavalry;
    }
    
    // loop to load data
    for (i=0; i<unitSet.length; i++)
    {
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
    
    if (type == "a_infantry")
    {
        // create infantry row
        createUnit("infantry");
        
        // add to array
        var freshUnit = new unit("infantry", 1);
        a_infantry.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('A_Infantry_Count').innerHTML = a_infantry.length;
    }
    
    if (type == "b_infantry")
    {
        // create infantry row
        createUnit("infantry");
        
        // add to array
        var freshUnit = new unit("infantry", 1);
        b_infantry.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('B_Infantry_Count').innerHTML = b_infantry.length;
    }
    
    if (type == "a_archers")
    {
        // create infantry row
        createUnit("archers");
        
        // add to array
        var freshUnit = new unit("archers", 1);
        a_archers.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('A_Archers_Count').innerHTML = a_archers.length;
    }
    
    if (type == "b_archers")
    {
        // create infantry row
        createUnit("archers");
        
        // add to array
        var freshUnit = new unit("archers", 1);
        b_archers.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('B_Archers_Count').innerHTML = b_archers.length;
    }
    
    if (type == "a_pikemen")
    {
        // create infantry row
        createUnit("pikemen");
        
        // add to array
        var freshUnit = new unit("pikemen", 1);
        a_pikemen.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('A_Pikemen_Count').innerHTML = a_pikemen.length;
    }
    
    if (type == "b_pikemen")
    {
        // create infantry row
        createUnit("pikemen");
        
        // add to array
        var freshUnit = new unit("pikemen", 1);
        b_pikemen.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('B_Pikemen_Count').innerHTML = b_pikemen.length;
    }
    
    if (type == "a_cavalry")
    {
        // create infantry row
        createUnit("cavalry");
        
        // add to array
        var freshUnit = new unit("cavalry", 1);
        a_cavalry.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('A_Cavalry_Count').innerHTML = a_cavalry.length;
    }
    
    if (type == "b_cavalry")
    {
        // create infantry row
        createUnit("cavalry");
        
        // add to array
        var freshUnit = new unit("cavalry", 1);
        b_cavalry.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('B_Cavalry_Count').innerHTML = b_cavalry.length;
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
    if (openWindow == "a_infantry")
    {
        if (a_infantry[chosenIndex-1].rank < 3) {a_infantry[chosenIndex-1].rank++;} // if rank is < 3 add to rank
    }
    
    if (openWindow == "b_infantry")
    {
        if (b_infantry[chosenIndex-1].rank < 3) {b_infantry[chosenIndex-1].rank++;} // if rank is < 3 add to rank
    }
    
    if (openWindow == "a_archers")
    {
        if (a_archers[chosenIndex-1].rank < 3) {a_archers[chosenIndex-1].rank++;}
    }
    
    if (openWindow == "b_archers")
    {
        if (b_archers[chosenIndex-1].rank < 3) {b_archers[chosenIndex-1].rank++;}
    }
    
    if (openWindow == "a_pikemen")
    {
        if (a_pikemen[chosenIndex-1].rank < 3) {a_pikemen[chosenIndex-1].rank++;}
    }
    
    if (openWindow == "b_pikemen")
    {
        if (b_pikemen[chosenIndex-1].rank < 3) {b_pikemen[chosenIndex-1].rank++;}
    }
    
    if (openWindow == "a_cavalry")
    {
        if (a_cavalry[chosenIndex-1].rank < 3) {a_cavalry[chosenIndex-1].rank++;}
    }
    
    if (openWindow == "b_cavalry")
    {
        if (b_cavalry[chosenIndex-1].rank < 3) {b_cavalry[chosenIndex-1].rank++;}
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
    if (openWindow == "a_infantry")
    {
        if (a_infantry[chosenIndex-1].rank >= 2) {a_infantry[chosenIndex-1].rank--;} // if rank is < 3 add to rank
    }
    
    if (openWindow == "b_infantry")
    {
        if (b_infantry[chosenIndex-1].rank >= 2) {b_infantry[chosenIndex-1].rank--;} // if rank is < 3 add to rank
    }
    
    if (openWindow == "a_archers")
    {
        if (a_archers[chosenIndex-1].rank >= 2) {a_archers[chosenIndex-1].rank--;}
    }
    
    if (openWindow == "b_archers")
    {
        if (b_archers[chosenIndex-1].rank >= 2) {b_archers[chosenIndex-1].rank--;}
    }
    
    if (openWindow == "a_pikemen")
    {
        if (a_pikemen[chosenIndex-1].rank >= 2) {a_pikemen[chosenIndex-1].rank--;}
    }
    
    if (openWindow == "b_pikemen")
    {
        if (b_pikemen[chosenIndex-1].rank >= 2) {b_pikemen[chosenIndex-1].rank--;}
    }
    
    if (openWindow == "a_cavalry")
    {
        if (a_cavalry[chosenIndex-1].rank >= 2) {a_cavalry[chosenIndex-1].rank--;}
    }
    
    if (openWindow == "b_cavalry")
    {
        if (b_cavalry[chosenIndex-1].rank >= 2) {b_cavalry[chosenIndex-1].rank--;}
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
    if (openWindow == "a_infantry")
    {
        a_infantry.splice(indexToRemove-1, 1);
    }
    
    if (openWindow == "b_infantry")
    {
        b_infantry.splice(indexToRemove-1, 1);
    }
    
    if (openWindow == "a_archers")
    {
        a_archers.splice(indexToRemove-1, 1);
    }
    
    if (openWindow == "b_archers")
    {
        b_archers.splice(indexToRemove-1, 1);
    }
    
    if (openWindow == "a_pikemen")
    {
        a_pikemen.splice(indexToRemove-1, 1);
    }
    
    if (openWindow == "b_pikemen")
    {
        b_pikemen.splice(indexToRemove-1, 1);
    }
    
    if (openWindow == "a_cavalry")
    {
        a_cavalry.splice(indexToRemove-1, 1);
    }
    
    if (openWindow == "b_cavalry")
    {
        b_cavalry.splice(indexToRemove-1, 1);
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