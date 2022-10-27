const qualifications = require("./qualifications");
const countries = require("./countries");
const getNameGenderReligion = require("./getNameGenderReligion");
const {
    getAddress, getSkinColor, getHairColor, getHairStyle, getEmail, getEyeColor
} = require("./utils")
const uuid = require("uuid");
const randInt = require("./randInt");

class RandomPeople{
    getHighestEducation(){
        return qualifications[randInt(0, qualifications.length - 1)]
    }

    getNationality(){
        let randomIndex = randInt(0, countries.length - 1)
        return countries[randomIndex]
    }

    getDOB(age){
        let year = new Date().getFullYear() - age
        let month = randInt(1, 12)
        let day = randInt(1, 28)
        return String(new Date(`${year}-${month}-${day}`)).slice(0, 16).trim()
    }

    getPhoneNumber(length = 10){
        let phoneNumber = String(randInt(7, 9));
        for(let i = 0; i < length - 1; i++){
            phoneNumber += String(randInt(0, 9))
        }
        return phoneNumber;        
    }

    getRandomPerson(){
        let {firstname, lastname, gender, religion} = getNameGenderReligion()
        let age = randInt(18, 110)
        let nationality = this.getNationality()
        let sideBussiness = ["Youtuber", "Vlogger", "Blogger", "Tiktoker", "Gamer"]
        let skinColor = getSkinColor()
        let hairStyle = getHairStyle(gender)
        let person = {
            id: String(uuid.v4()),
            firstname,
            lastname,
            dob: this.getDOB(age),
            email: getEmail(firstname, lastname, age),
            phoneNumber: this.getPhoneNumber(),
            address: getAddress(nationality),
            gender,
            religion,
            age,
            skinColor,
            eyeColor: getEyeColor(skinColor),
            hairStyle,
            hairColor: getHairColor(skinColor, age, hairStyle),
            isMarried: randInt(0, 1) == 0 ? true : false,
            highestEducation: this.getHighestEducation(),
            occupation: randInt(0, 1) == 0 ? "Bussiness" : "Service",
            sideBussiness: sideBussiness[randInt(0, sideBussiness.length - 1)],
            annaulIncomeUSD: randInt(2500, 20000) * 12,
            nationality,
            heightInFeet: Math.round(randInt(15, 24) / 10 * 3.281, 1),
            weightInKg: randInt(35, 90)  
        }
        return person

    }

    getRandomPeople(totalPeoples = 10){
        let peoples = [];
        for (let i = 0; i < totalPeoples; i++){
            peoples.push(this.getRandomPerson())
        }
        return peoples
    }

}

module.exports = RandomPeople