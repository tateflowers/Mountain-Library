var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Geography/World's%20Tallest%20Mountains.csv";
var mountainName = getColumn(url, 2);
var mountainHeight = getColumn(url, 3);
var mountainRange = getColumn(url, 6);
var mountainParent = getColumn(url, 8);
var mountainAscents = getColumn(url, 10);
var mountainCountry = getColumn(url, 11);

function findMountainsInRange(range){

var matchingMts = [];

for(var i = 0; i < mountainRange.length; i++){
    if(mountainRange[i].toLowerCase().includes(range.toLowerCase())){
        matchingMts.push(mountainName[i]);
    }
}
    if(matchingMts.length == 0){
    matchingMts.push("No Mountains In Range")
}
    return matchingMts;
}
console.log(findMountainsInRange("baltoro karakoram"));

function findMountainsWithHeight(minHeight, maxHeight){
    var matchingMts = [];

for(var i = 0; i < mountainHeight.length; i++){
    if(mountainHeight[i] >= minHeight || mountainHeight[i] <= maxHeight){
        matchingMts.push(mountainName[i]);
    }
}
    return matchingMts;
}
console.log(findMountainsWithHeight(7300, 7500))

function findMountainsInCountry(country){}

function findMountainSuccessRateIn2004(mountain){}

function findParentMountain(mountain){}
