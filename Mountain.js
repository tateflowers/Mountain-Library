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

function findMountainsInCountry(country){
    var MountainCountry = [];
    for (var i = 0; i < mountainCountry.length; i++){
        if (mountainCountry[i].toLowerCase().includes(country.toLowerCase())) MountainCountry.push(mountainName[i]);
    }
    console.log(typeof country);
    return MountainCountry;
}
// console.log(findMountainsInCountry("Nepal")); 

function findMountainSuccessRateIn2004(mountain){
    for (var i = 0; i < mountainName.length; i++){
        if (mountain == mountainName[i]){
            var openbracket = mountainAscents[i].indexOf("(");
            var closebracket = mountainAscents[i].indexOf(")");
            var attempted = 0;
            var failed = 0;
            for (var j = 0; j < openbracket-1; j++){
                attempted *= 10;
                attempted += parseInt(mountainAscents[i][j]);
            }
            for (var j = openbracket+1; j < closebracket; j++){
                failed *= 10;
                failed += parseInt(mountainAscents[i][j]);
            }
            console.log(attempted);
            return failed;
            // console.log(mountainAscents[i].split(" "));



            // console.log(openbracket);
            // console.log(closebracket);
            // return mountainAscents[i];

        }
    }
}
// console.log(findMountainSuccessRateIn2004("K2"));

function findParentMountain(mountain){}
