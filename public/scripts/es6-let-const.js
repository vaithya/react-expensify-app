'use strict';

var name = 'Vaithya';
var name = 'abc';
console.log('Name', name);

var nameVar = 'def';
nameVar = 'efg';
// You cannot redefine it in let. Ex: let nameVar = 'pqr'; Duplicate declaration is not possible in ES6 using let.
// You can reassign.
console.log('Name let:', nameVar);

var a = 'ghf';
console.log('Const var:', a);

// Scoping differences among these three

// All three are function scoped. We cannot access variables defined within a func outside it.
function getPetName() {
  var petName = 'abc';
  return petName;
}

getPetName();

//Let and const are also block level scoped. Var is not.
//console.log(petName);

var fullName = 'def';

if (fullName) {
  var firstName = fullName.split(' ')[0];
  // const and let won't work like this. 
  console.log(firstName);
}

console.log(firstName); // You can access.
