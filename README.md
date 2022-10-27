# get-random-people &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) [![Generic badge](https://img.shields.io/badge/version-1.0.8-<COLOR>.svg)](https://shields.io/)
A javascript package that generates huge dataset of fake, but real looking data of a person. Useful to create graphs, tables etc.
# Installation

```
npm install get-random-people
```

## Examples

### To get single person, `getRandomPerson()`

```
import RandomPeople from "get-random-people"

// for older versions of node
const RandomPeople = require("get-random-people")

const user = new RandomPeople()
user.getRandomPerson() // eg:{"firstname": "Harry", "lastname": "Potter", ...}
```

In the above example `RandomPeople().getRandomPerson()` will return an object that has all the information of a person.

### To get multiple person, `getRandomPeoples([n])`

```
import RandomPeople from "get-random-people"

const users = new RandomPeople().getRandomPeoples() 
const hunderedUsers = new RandomPeople().getRandomPeoples(100)
```

In the above example ```getRandomPeoples()``` will return an array of **10** person by default, but if you pass any numbers in the parenthesis it will return an array of that numbers of people, eg ```getRandomPeoples(100)``` will return an array of **100** people

### To get the property of a person
```
const user = new RandomPeople().getRandomPerson()

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
import RandomPeople from "get-random-people"

RandomPeople().getHighestEducation() // returns a qualification
RandomPeople().getPhoneNumber([n]) // returns a phone number with n number of digits, if nothing is passed 10 digit number will be returned
RandomPeople().getDOB(age) // returns a date of birth, must pass age as integer
RandomPeople().getNationality() // returns a country name

```

&copy; 2022 InternetWebSoftwares | Ata Shaikh | Nicholes Viktor

This repository is licensed under the MIT license
See License for details.