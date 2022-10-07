const randInt = require("./randInt");
const countriesCapital = require("./countriesCapital");

function getAddress(nationality){
    let country = nationality
    let region = countriesCapital[nationality];
    let street = `${randInt(11, 124)}th street`;
    let house = `House no ${randInt(1, 30)}`;
    return `${house}, ${street}, ${region}, ${country}`;
}

function getSkinColor(){
    let skinColors = ["white","brown", "pale", "black"];
    return skinColors[randInt(0, skinColors.length - 1)]
}
    
function getEyeColor(skinColor){
    let eyeColors = []
    if(skinColor == "white" || skinColor == "pale"){
        eyeColors = ["blue", "green", "grey", "brown", "black"]
    }
    else{
        eyeColors = ["brown", "black"];
    }
    return eyeColors[randInt(0, eyeColors.length - 1)]
}

function getHairStyle(gender){
    let hairStyles = ['short', 'medium', 'long', 'sides short center long', 'bald']
    if(gender == "female"){
        hairStyles.splice(3, 4)
    }
    return hairStyles[randInt(0, hairStyles.length - 1)]
}
    
function getHairColor(skinColor, age, hairStyle){
    let hairColor = [];
    if(skinColor == "white" || skinColor == "pale"){
        hairColor = ["blonde", "brown", "black", "red", "white"];
    }
    else{
        hairColor = ["brown", "black"]
    }
    
    if(age > 65){
        hairColor = ["white"]
    }
    
    if(hairStyle == "bald"){
        hairColor = ["bald"]
    }
    
    return hairColor[randInt(0, hairColor.length - 1)]
}

function getEmail(firstname, lastname, age){
    let domains = ["gmail", "yahoo", "outlook", "hotmail", "live"];
    let random_index = randInt(0, domains.length - 1)
    let email = `${firstname.toLowerCase()}${lastname.toLowerCase()}${new Date().getFullYear() - age}@${domains[random_index]}.com`;
    return email
}

module.exports = {
    getAddress, getSkinColor, getHairColor, getHairStyle, getEmail, getEyeColor
}