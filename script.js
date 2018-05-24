// Lecture: If else statement
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
  console.log(name + ' is married!');
} else {
  console.log(name + ' will hopefully marry soon :)');
}

isMarried = false;

if(isMarried) {
  console.log('YES!');
} else {
  console.log('No');
}
*/

/*
var age = 35;

if (age < 20) {
  console.log('John is a teenager');
} else if (age > 20 && age < 30) {
  console.log('John is a young man.')
} else {
  console.log('John is a man.')
}


var job = 'teacher';

job = prompt('What does John do?');

switch (job) {
  case 'teacher':
    console.log('John teaches kids.');
    break;
  case 'driver':
    console.log('JOhn drives a cab in Lisbon.');
    break;
  case 'cop':
    console.log('John helps fight crime');
    break;
  default:
    console.log('John does something else.');
}
*/
/*
var heightMike = 180;
var heightDan = 165;
var ageMike = 26;
var ageDan = 29;

var scoreMike = (ageMike * 5) + heightMike;
var scoreDan = (ageDan * 5) + heightDan;

if (scoreMike > scoreDan) {
  console.log(`Mike wins with the score of ${scoreMike}.`);
} else if (scoreDan === scoreMike) {
  console.log(`There is a draw as Mike score is ${scoreMike} and Dan score is ${scoreDan}`)
} else if (scoreDan > scoreMike) {
  console.log(`Dan wins with the score of ${scoreDan}`)
} else {
  console.log(`There is no winner today.`)
}
*/

// Functions
// function and then the name of the function. argument to pass into the fucntion (..)
/*
function calculateAge(yearOfBirth) {
  var age = 2018 - yearOfBirth;
  return age;
}

var ageJohn = calculateAge(1990);
console.log(ageJohn);


var ageMike = calculateAge(1983);
console.log(ageMike);

function yearsUntillRetirement(name, year) {
  var age = calculateAge(year);
  var retirement = 85 - age;
  if(retirement >= 0) {
    console.log(name + ' retires in ' + retirement + ' years.');
  } else {
    console.log(name + ' is already retired.');
  }

}

yearsUntillRetirement('Mike', 1983);
yearsUntillRetirement('Mary', 1918);
*/

// Arrays

/*
var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);

names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();

console.log(john);

john.indexOf('Smith');


if (john.indexOf('teacher') === -1) {
  console.log('John is NOT a teacher.');
}
*/

// for Loops
// ++ operator is the same as i = i + 1
for (var i = 0; i < 10; i++) {
  console.log(i);
}


var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];
/*
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}


for (var i = names.length - 1; i >= 0; i--) {
  console.log(names[i]);
}
*/
// while Loops
var i = 0;
while(i < names.length) {
  console.log(names[i]);
  i++;
}

for (var i = 1; i <= 5; i++) {
    if (i === 3) {
    break;
  }
  console.log(i);
}

// create array with some years

var yearBorn = [1976, 2004, 2001, 1948, 1972];


function printAge(yearBorn) {
  var ages = [];
  var fullAges = [];

  for (var i = 0; i < yearBorn.length; i++) {
    ages[i] = 2018 - yearBorn[i];
  }

  for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      console.log('Person ' + (i + 1) +  ' is ' + ages[i] + ' years old, and is full age.');
      fullAges.push(true);
    } else {
      console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
      fullAges.push(false);
    }
  }
  return fullAges;
}

var full_1 = printAge(yearBorn);
var full_2 = printAge([2001, 1983, 1945]);
