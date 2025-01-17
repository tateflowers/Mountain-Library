var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Geography/World's%20Tallest%20Mountains.csv";
var mountainName = getColumn(url, 2);
var mountainHeight = getColumn(url, 3);
var mountainHeightft = getColumn(url, 4);
var mountainRange = getColumn(url, 6);
var mountainParent = getColumn(url, 8);
var mountainAscents = getColumn(url, 10);
var mountainCountry = getColumn(url, 11);


// This function takes a range and returns mountains in the range
// range{string} - a specific mountain range 
// return{list} - returns the mountains(in the data set)

function findMountainsInRange(range){
var matchingMts = [];

for(var i = 0; i < mountainRange.length; i++){
    
    if(mountainRange[i].toLowerCase().includes(range.toLowerCase())){
        matchingMts.push(mountainName[i]);
    }
}
    if(matchingMts.length == 0){
    return "No Mountains In Range"
}
    return matchingMts;
}
console.log(findMountainsInRange("("));

// This gives mountains within two heights
// unit{string} - sets search to specific unit 
// minHeight{number} - lowest height to search
// maxHeight{number} - highest height to search
// return{list} - returns the mountains in the height range

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
console.log(findMountainsWithHeight("ft",7000,7200));

// This finds mountains in a country
// country{string} - a specific mountain country 
// return{list} - returns the mountains in the country

function findMountainsInCountry(country){
    var MountainCountry = [];
    for (var i = 0; i < mountainCountry.length; i++){
        if (mountainCountry[i].toLowerCase().includes(country.toLowerCase())) MountainCountry.push(mountainName[i]);
    }
    if(MountainCountry == 0){
        return "Country Invalid"
    }
    return MountainCountry;
}
console.log(findMountainsInCountry("ajikis")); 

//Find the success ascents rate of a mountain in 2004
//mountain {string} - the name of the mountain
// return {number} - the success ascents rate of that mountain in 2004

function findMountainSuccessRateIn2004(mountain){
    for (var i = 0; i < mountainName.length; i++){
        if (mountain.toLowerCase() == mountainName[i].toLowerCase()){
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
        
            return (attempted-failed)/attempted;
        }
    }
    return -1;
}
console.log(findMountainSuccessRateIn2004("K3"));

// Finds the parent mountain of the mountain
// mountain {string} - the name of the mountain
// return {list} - a list of parent mountains of the mountain

function findParentMountain(mountain){
    for(var i = 0; i < mountainName.length; i++){
        if(mountainName[i].toLowerCase() == mountain.toLowerCase()){
            return mountainParent[i]
        }
    }
            return "Invalid Input"
}
console.log(findParentMountain("kangchenjunga"));

function findParentMountain(mountain){
    var matchingMts = [];
    for(var i = 0; i < mountainName.length; i++){
        if(mountainName[i].toLowerCase().includes(mountain.toLowerCase())){
            matchingMts.push(mountainParent[i]);
        }
    }
    if (matchingMts.length == 0) return "No matching mountain";
    return matchingMts;
}

console.log(findParentMountain("gasherbrum"));
