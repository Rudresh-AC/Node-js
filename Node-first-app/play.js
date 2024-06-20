// const person = {
//   name: "max",
//   age: 29,
//   greet() {
//     console.log("hii i am " + this.name);
//   },
// };

// const printPerson = ({ name, age }) => {
//   console.log(name, age);
// };

// printPerson(person);

// const hobbies = ["Sports", "Cooking"];

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

// console.log(hobbies.map((hobby) => "Hobby: " + hobby));

// spred operator with arry

// const coypArr = [...hobbies];

// console.log(coypArr);

// spred operator with object

// const copyObj = { ...person };

// console.log(copyObj);

// const toArray = (...arg) => {
//   return arg;
// };

// console.log(toArray(1, 2, 3, 4));

const person = {
  name: "max",
  age: 29,
  address: {
    city: "Delhi",
    country: "Indian",
  },
};

// Shallow copy using Onject.assign()

const shallowCopy = Object.assign({}, person);

// shallowCopy.address.city = "Mumbai";

// console.log(person.address.city);
// console.log(shallowCopy.address.city);

// Deep copy using JSON.parse() and JSON.Stringify();

const deepCopy = JSON.parse(JSON.stringify(person));

deepCopy.address.city = "Bangalore";

console.log(person.address.city);
console.log(deepCopy.address.city);
