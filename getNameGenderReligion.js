const {arabicMale, arabicFemale, arabicSurnames, westernMale, westernFemale, westernSurnames} = require("./names");
const randint = require("./randint");

function getNameGenderReligion(){
    let religions = ['islam', 'christianity', 'other'];
    let genders = ['male', 'female'];
    let religion = religions[randint(0, 2)];
    let gender = genders[randint(0, 1)];
    let firstname = "";
    let lastname = "";
    if(religion == 'islam'){
        if(gender == 'male'){
            firstname = arabicMale[randint(0, arabicMale.length - 1)];
            lastname = arabicSurnames[randint(0, arabicSurnames.length - 1)];
        }
        else{
            firstname = arabicFemale[randint(0, arabicFemale.length - 1)];
            lastname = arabicSurnames[randint(0, arabicSurnames.length - 1)];
        }
    }
            
    else if(religion == 'christianity'){
        if(gender == 'male'){
            firstname = westernMale[randint(0, westernMale.length - 1)];
            lastname = westernSurnames[randint(0, westernSurnames.length - 1)];
        }
        else{
            firstname = westernFemale[randint(0, westernFemale.length - 1)];
            lastname = westernSurnames[randint(0, westernSurnames.length - 1)];
        }
    }
    else{
        if(gender == 'male'){    
            firstname = westernMale[randint(0, westernMale.length - 1)];
            lastname = westernSurnames[randint(0, westernSurnames.length - 1)];
        }
        else{
            firstname = westernFemale[randint(0, westernFemale.length - 1)];
            lastname = westernSurnames[randint(0, westernSurnames.length - 1)];
        }
    }
        
    return {firstname, lastname, gender, religion};

}

module.exports = getNameGenderReligion