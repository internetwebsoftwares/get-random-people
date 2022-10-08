# get_random_people &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) [![Generic badge](https://img.shields.io/badge/version-1.0.5-<COLOR>.svg)](https://shields.io/)
A javascript package that generates huge dataset of fake, but real looking data of a person. Useful to create graphs, tables etc.
# Installation

```
npm install get-random-people
```

## Examples

### To get single person, `getRandomPerson()`

```
import GetRandomPeople from get-random-people

// for older versions
const GetRandomPeople = require("get-random-people")

const user = new GetRandomPeople()
user.GetRandomPerson() // eg:{"firstname": "Harry", "lastname": "Potter", ...}
```

In the above example `GetRandomPeople().getRandomPerson()` will return an object that has all the information of a person.

### To get multiple person, `getRandomPeoples([n])`

```
import GetRandomPeople from get-random-people

const users = new GetRandomPeople().getRandomPeoples() 
const hunderedUsers = new GetRandomPeople().getRandomPeoples(100)
```

In the above example ```getRandomPeoples()``` will return an array of **10** person by default, but if you pass any numbers in the parenthesis it will return an array of that numbers of people, eg ```getRandomPeoples(100)``` will return an array of **100** people

### To get the property of a person
```
const user = new GetRandomPeople().getRandomPerson()

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
import GetRandomPeople from get-random-people

GetRandomPeople().getHighestEducation() // returns a qualification
GetRandomPeople().getPhoneNumber([n]) // returns a phone number with n number of digits, if nothing is passed 10 digit number will be returned
GetRandomPeople().getDOB(age) // returns a date of birth, must pass age as integer
GetRandomPeople().getNationality() // returns a country name

```

&copy; 2022 InternetWebSoftwares | Ata Shaikh | Nicholes Viktor

This repository is licensed under the MIT license
See License for details.