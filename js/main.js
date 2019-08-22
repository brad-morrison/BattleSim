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
function unit(type, rank, soldierCount, attack, defense, speed)
{
    this.type = type;
    this.rank = rank;
    this.soldierCount = soldierCount;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
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

//debug
var AS;
var BS;

    
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
        var freshUnit = new unit("infantry", 1, 20, 6, 8, 3);
        a_infantry.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('A_Infantry_Count').innerHTML = a_infantry.length;
    }
    
    if (type == "b_infantry")
    {
        // create infantry row
        createUnit("infantry");
        
        // add to array
        var freshUnit = new unit("infantry", 1, 20, 6, 8, 3);
        b_infantry.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('B_Infantry_Count').innerHTML = b_infantry.length;
    }
    
    if (type == "a_archers")
    {
        // create infantry row
        createUnit("archers");
        
        // add to array
        var freshUnit = new unit("archers", 1, 10, 8, 3, 6);
        a_archers.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('A_Archers_Count').innerHTML = a_archers.length;
    }
    
    if (type == "b_archers")
    {
        // create infantry row
        createUnit("archers");
        
        // add to array
        var freshUnit = new unit("archers", 1, 10, 8, 3, 6);
        b_archers.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('B_Archers_Count').innerHTML = b_archers.length;
    }
    
    if (type == "a_pikemen")
    {
        // create infantry row
        createUnit("pikemen");
        
        // add to array
        var freshUnit = new unit("pikemen", 1, 10, 6, 3, 10);
        a_pikemen.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('A_Pikemen_Count').innerHTML = a_pikemen.length;
    }
    
    if (type == "b_pikemen")
    {
        // create infantry row
        createUnit("pikemen");
        
        // add to array
        var freshUnit = new unit("pikemen", 1, 10, 6, 3, 10);
        b_pikemen.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('B_Pikemen_Count').innerHTML = b_pikemen.length;
    }
    
    if (type == "a_cavalry")
    {
        // create infantry row
        createUnit("cavalry");
        
        // add to array
        var freshUnit = new unit("cavalry", 1, 8, 6, 10, 3);
        a_cavalry.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('A_Cavalry_Count').innerHTML = a_cavalry.length;
    }
    
    if (type == "b_cavalry")
    {
        // create infantry row
        createUnit("cavalry");
        
        // add to array
        var freshUnit = new unit("cavalry", 1, 8, 6, 10, 3);
        b_cavalry.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('B_Cavalry_Count').innerHTML = b_cavalry.length;
    }
    
    //DEBUG
    createScore();
    document.getElementById("debug-bonus-score-a").innerHTML = AS;
    document.getElementById("debug-bonus-score-b").innerHTML = BS;
}

function plus(button)
{
    // A
    if (button == "ai")
    {
        var freshUnit = new unit("infantry", 1, 20, 6, 8, 3);
        a_infantry.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('A_Infantry_Count').innerHTML = a_infantry.length;
    }
    
    if (button == "aa")
    {
        // add to array
        var freshUnit = new unit("archers", 1, 10, 8, 3, 6);
        a_archers.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('A_Archers_Count').innerHTML = a_archers.length;
    }
    
    if (button == "ac")
    {
        // add to array
        var freshUnit = new unit("cavalry", 1, 8, 6, 10, 3);
        a_cavalry.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('A_Cavalry_Count').innerHTML = a_cavalry.length;
    }
    
    if (button == "ap")
    {
        // add to array
        var freshUnit = new unit("pikemen", 1, 10, 6, 3, 10);
        a_pikemen.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('A_Pikemen_Count').innerHTML = a_pikemen.length;
    }
    
    // B
    if (button == "bi")
    {
        var freshUnit = new unit("infantry", 1, 20, 6, 8, 3);
        b_infantry.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('B_Infantry_Count').innerHTML = b_infantry.length;
    }
    
    if (button == "ba")
    {
        // add to array
        var freshUnit = new unit("archers", 1, 10, 8, 3, 6);
        b_archers.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('B_Archers_Count').innerHTML = b_archers.length;
    }
    
    if (button == "bc")
    {
        // add to array
        var freshUnit = new unit("cavalry", 1, 8, 6, 10, 3);
        b_cavalry.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('B_Cavalry_Count').innerHTML = b_cavalry.length;
    }
    
    if (button == "bp")
    {
        // add to array
        var freshUnit = new unit("pikemen", 1, 10, 6, 3, 10);
        b_pikemen.push(freshUnit);
        
        // set count label on home screen
        document.getElementById('B_Pikemen_Count').innerHTML = b_pikemen.length;
    }
    
    //DEBUG
    createScore();
    document.getElementById("debug-bonus-score-a").innerHTML = AS;
    document.getElementById("debug-bonus-score-b").innerHTML = BS;
    
}

function minus(button)
{
    // A
    if (button == "ai")
    {
        a_infantry.pop();
        
        // set count label on home screen
        document.getElementById('A_Infantry_Count').innerHTML = a_infantry.length;
    }
    
    if (button == "aa")
    {
        a_archers.pop();
        
        // set count label on home screen
        document.getElementById('A_Archers_Count').innerHTML = a_archers.length;
    }
    
    if (button == "ac")
    {
        a_cavalry.pop();
        
        // set count label on home screen
        document.getElementById('A_Cavalry_Count').innerHTML = a_cavalry.length;
    }
    
    if (button == "ap")
    {
        a_pikemen.pop();
        
        // set count label on home screen
        document.getElementById('A_Pikemen_Count').innerHTML = a_pikemen.length;
    }
    
    // B
    if (button == "bi")
    {
        b_infantry.pop();
        
        // set count label on home screen
        document.getElementById('B_Infantry_Count').innerHTML = b_infantry.length;
    }
    
    if (button == "ba")
    {
        b_archers.pop();
        
        // set count label on home screen
        document.getElementById('B_Archers_Count').innerHTML = b_archers.length;
    }
    
    if (button == "bc")
    {
        b_cavalry.pop();
        
        // set count label on home screen
        document.getElementById('B_Cavalry_Count').innerHTML = b_cavalry.length;
    }
    
    if (button == "bp")
    {
        b_pikemen.pop();
        
        // set count label on home screen
        document.getElementById('B_Pikemen_Count').innerHTML = b_pikemen.length;
    }
    
    //DEBUG
    createScore();
    document.getElementById("debug-bonus-score-a").innerHTML = AS;
    document.getElementById("debug-bonus-score-b").innerHTML = BS;
    
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
    
    //DEBUG
    createScore();
    document.getElementById("debug-bonus-score-a").innerHTML = AS;
    document.getElementById("debug-bonus-score-b").innerHTML = BS;
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
    
    //DEBUG
    createScore();
    document.getElementById("debug-bonus-score-a").innerHTML = AS;
    document.getElementById("debug-bonus-score-b").innerHTML = BS;
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
    
    //DEBUG
    createScore();
    document.getElementById("debug-bonus-score-a").innerHTML = AS;
    document.getElementById("debug-bonus-score-b").innerHTML = BS;
    
}

// BATTLE LOGIC

function battleLogic()
{
    
    var playerScore = createScore();
    
    // check for win
    var ACount = a_infantry.length + a_archers.length + a_pikemen.length + a_cavalry.length;
    var BCount = b_infantry.length + b_archers.length + b_pikemen.length + b_cavalry.length;
    
    if (ACount == 0 || BCount == 0)
    {
        if (ACount != BCount)
        {
            if (ACount > 0)
            {
                console.log("A wins");
            }
            else
            {
                console.log("B wins");
            }
        }
    }
    
    if (a_cavalry.length > 0)
    {
        if (b_pikemen.length > 0)
        {
            if (a_infantry.length > 0)
            {
                if (b_archers.length > 0)
                {
                    if (a_archers.length > 0)
                    {
                        //archers fire
                        console.log("archers fire");
                        return;
                    }
                    
                    // charge infantry
                    console.log("charge infantry");
                    return;
                }
                
                // charge infantry
                console.log("charge infantry");
                return;
                
            }
            
            if (a_archers.length > 0)
            {
                // archers fire
                console.log("archers fire");
                return;
            }

            if (a_pikemen.length > 0)
            {
                // charge pikes
                console.log("charge pikes");
                return;
            }

            // charge cavalry
            console.log("charge cavalry");
            return;
        }
        
        // charge cavalry
        console.log("charge cavalry");
        return;
    }
    
    if (a_infantry.length > 0)
    {
        if (b_archers.length > 0)
        {
            if (a_archers.length > 0)
            {
                //archers fire
                console.log("archers fire");
                return;
            }

            // charge infantry
            console.log("charge infantry");
            return;
        }
        
        // charge infantry
        console.log("charge infantry");
        return;

    }
    
    if (a_archers.length > 0)
    {
        // archers fire
        console.log("archers fire");
        return;
    }

    if (a_pikemen.length > 0)
    {
        // charge pikes
        console.log("charge pikes");
        return;
    }
    
    // no units left
    console.log("no units left");
}

function createScore()
{
    // calc base soldier score (number of soldiers * experience)
    var aSoldierScore = calcSoldierScore(a_infantry) + calcSoldierScore(a_archers) + calcSoldierScore(a_cavalry) + calcSoldierScore(a_pikemen);
    var bSoldierScore = calcSoldierScore(b_infantry) + calcSoldierScore(b_archers) + calcSoldierScore(b_cavalry) + calcSoldierScore(b_pikemen);
    
    // calc bonus score
    var aBonusScore = calcBonus("A");
    var bBonusScore = calcBonus("B");
    
    // calc final score
    var aScore = aSoldierScore + aBonusScore;
    var bScore = bSoldierScore + bBonusScore;
    
    //debug
    AS = aScore;
    BS = bScore;
    
    console.log("A score = " + aScore);
    console.log("B score = " + bScore);
}

function calcSoldierScore(array)
{
    var soldierScore = 0;
    
    for (i=0; i < array.length; i++)
    {
        // soldier count * rank
        soldierScore = soldierScore + (array[i].soldierCount * array[i].rank);
        
        // add attack, defense and speed scores
        soldierScore = soldierScore + (array[i].attack + array[i].defense + array[i].speed);
    }
    
    return soldierScore;
}

function calcBonus(checking)
{
    var bonus = 0;
    
    // check correct arrays
    if (checking == "A")
    {
        var aI = a_infantry;
        var aA = a_archers;
        var aC = a_cavalry;
        var aP = a_pikemen;
        var bI = b_infantry;
        var bA = b_archers;
        var bC = b_cavalry;
        var bP = b_pikemen;
    }
    else
    {
        var aI = b_infantry;
        var aA = b_archers;
        var aC = b_cavalry;
        var aP = b_pikemen;
        var bI = a_infantry;
        var bA = a_archers;
        var bC = a_cavalry;
        var bP = a_pikemen;
    }
    
    // if A has cavalry and B has no pikes
    if (aC.length > 0 && bP.length == 0)
    {
        if (aC.length >= bI.length)
        {
            bonus = bonus + 200;
        }
        else
        {
            bonus = bonus + 80;
        }
    }
    
    // if A has pikes and B has cavalry
    if (aP.length > 0 && bC.length > 0)
    {
        if (aP.length >= bC.length)
        {
            bonus = bonus + 200;
        }
        else
        {
            bonus = bonus + 80;
        }
    }
    
    // if A has archers and b has no archers or cavalry
    if (aA.length > 0 && (bA.length == 0 && bC.length == 0))
    {
        if (aA.length >= bI.length)
        {
            bonus = bonus + 100;
        }
        else
        {
            bonus = bonus + 60;
        }
    }
    
    // if A has infantry and B has archers but no cavalry
    if (aI.length > 0 && (bA.length > 0 && bC.length == 0))
    {
        if (aI.length >= bA.length)
        {
            bonus = bonus + 100;
        }
        else
        {
            bonus = bonus + 40;
        }
    }
    
    // if A has infantry and B has pikes
    if (aI.length > 0 && bP.length > 0)
    {
        if (aI.length >= bP.length)
        {
            bonus = bonus + 100;
        }
        else 
        {
            bonus = bonus + 40;
        }
    }
    
    return bonus;
}
