// ES6 Object Destructuring

const person = {
  name: 'Vaithya',
  age: 27,
  location: {
    city: 'Chennai',
    temp: 92
  }
};

// Grabs the temp property and assigns it to a 'temperature' const variable.
// We cannot access temp. It has been renamed to temperature.
// const { city, temp: temperature } = person.location;

// Default value for city if person.location.city is undefined.
// If you have person.location.city, that value will be taken.
// const { city = 'Chennai', temp: temperature } = person.location;

// Combining renaming and default values.
// All are ES6 destructuring features.
// const { city: currentCity = 'Chennai', temp: temperature } = person.location;

// ES6 Array Destructuring

const address = [
  '1299, Juniper street',
  'Philadelphia',
  'Pennisylvania',
  '19147'
];

// const [street, city, state, zip] = address;
const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}`);
