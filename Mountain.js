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

function findMountainsWithHeight(unit, minHeight, maxHeight){
    var matchingMts = [];
if(unit ==  "meter" || unit == "m"){
    for(var i = 0; i < mountainHeight.length; i++){
        if(mountainHeight[i] >= minHeight && mountainHeight[i] <= maxHeight){
            matchingMts.push(mountainName[i]);
        }
    }
        if(matchingMts == 0){
            return "No Mountains in Specified Height/Try a different value"
        }
        return matchingMts;
}
else if(unit == "feet" || unit == "ft"){
    for(var i = 0; i < mountainHeightft.length; i++){
        if(mountainHeightft[i] >= minHeight && mountainHeightft[i] <= maxHeight){
            matchingMts.push(mountainName[i]);
        }
    }
        if(matchingMts == 0){
            return "No Mountains in Specified Height/Try a different value"
        }
        return matchingMts;
}

}
console.log(findMountainsWithHeight("ft",24000,25000));

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
        if (mountainName[i].toLowerCase().includes(mountain.toLowerCase())){
            var openbracket = mountainAscents[i].indexOf("(");
            var closebracket = mountainAscents[i].indexOf(")");
            var success = 0;
            var failed = 0;
            for (var j = 0; j < openbracket-1; j++){
                success *= 10;
                success += parseInt(mountainAscents[i][j]);
            }
            for (var j = openbracket+1; j < closebracket; j++){
                failed *= 10;
                failed += parseInt(mountainAscents[i][j]);
            }   
            if (success+failed == 0) return 0;
            return success/(success+failed);
        }
    }
    return -1;
}

// console.log(findMountainSuccessRateIn2004("bEi pK"));


function findParentMountain(mountain){
    matchingMts = [];
    for(var i = 0; i < mountainName.length; i++){
        if(mountainName[i].toLowerCase().includes(mountain.toLowerCase())){
            matchingMts.push(mountainParent[i]);
        }
    }
    if (matchingMts.length == 0) return "No matching mountain";
    return matchingMts;
}
