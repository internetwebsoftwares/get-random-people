# get_random_people &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) [![Generic badge](https://img.shields.io/badge/version-1.0.3-<COLOR>.svg)](https://shields.io/)
A javascript package that generates huge dataset of fake, but real looking data of a person. Useful to create graphs, tables etc.
# Installation

```
npm install get-random-people
```

## Examples

### To get single person, `getPerson()`

```
import getRandomPeople from get-random-people

const user = new getRandomPeople()
user.getPerson() // eg:{"firstname": "Harry", "lastname": "Potter", ...}
```

In the above example `getRandomPeople().getPerson()` will return an object that has all the information of a person.

### To get multiple person, `getPeoples([n])`

```
import getRandomPeople from get-random-people

const users = new getRandomPeople().getPeoples() 
const hunderedUsers = new getRandomPeople().getPeoples(100)
```

In the above example ```getPeoples()``` will return an array of **10** person by default, but if you pass any numbers in the parenthesis it will return an array of that numbers of people, eg ```getPeoples(100)``` will return an array of **100** people

### To get the property of a person
```
const user = new getRandomPeople().getPerson()

console.log(user.firstname) // eg: Harry
console.log(user.lastname) // eg: Potter
console.log(user.age) // eg: 33
console.log(user.nationality) // eg: England
```

### All the properties of a person
```
 id,
 firstname,
 lastname,
 dob,
 email,
 phoneNumber,
 address,
 gender,
 religion,
 age,
 skinColor,
 eyeColor,
 hairStyle,
 hairColor,
 isMarried,
 highestEducation,
 occupation,
 sideBussiness,
 annaulIncomeUSD,
 nationality,
 heightInFeet,
 weightInKg
```

### Functions

```
import getRandomPeople from get-random-people

getRandomPeople().getHighestEducation() // returns a qualification
getRandomPeople().getPhoneNumber([n]) // returns a phone number with n number of digits, if nothing is passed 10 digit number will be returned
getRandomPeople().getDOB(age) // returns a date of birth, must pass age as integer
getRandomPeople().getNationality() // returns a country name

```

&copy; 2022 InternetWebSoftwares | Ata Shaikh | Nicholes Viktor

This repository is licensed under the MIT license
See License for details.