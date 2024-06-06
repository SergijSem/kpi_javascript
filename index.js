console.log("МКР Семенюка Сергія [КП-21]");
// 1
// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// For cancelled input show “Canceled.”
// If the word’s length is odd - show the middle character.If word’s length is even - show the middle 2 characters.
// You should validate for empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
//  For user input “test” should return “es”
//  For user input “character” should return “a”
//  For user input “B” should return “B”
//  For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

function findMiddleCharacter() {
    const input = prompt("Enter a word:");

    const trimmedInput = input.trim();
    if (trimmedInput === "") {
      alert("Invalid value");
      return;
    }
  
    const length = trimmedInput.length;
    const middleIndex = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      alert(trimmedInput[middleIndex - 1] + trimmedInput[middleIndex]);
    } else {
      alert(trimmedInput[middleIndex]);
    }
  }

findMiddleCharacter();

//2 
//     {
//       id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       skills: ["ipsum", "lorem"],
//       gender: "male",
//       age: 37,
//     },
//     {
//       id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//       gender: "female",
//       age: 34,
//     },
//]
//       id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//       gender: "male",
//       age: 24,
//     },
//     {
//       id: "249b6175-5c30-44c6-b154-f120923736f5",
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       skills: ["adipisicing", "irure", "velit"],
//       gender: "female",
//       age: 21,
//     },
//     {
//       id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       skills: ["ex", "culpa", "nostrud"],
//       gender: "male",
//       age: 27,
//     }
// Write function, which will get array above as a param and return an array with skills of all users, values should be unique

// Write function, which will get array above as a param and return total balance of all users,
// who has two friens and whose age is less than 30

const users = [
    {
      id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      skills: ["ipsum", "lorem"],
      gender: "male",
      age: 37,
    },
    {
      id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
      gender: "female",
      age: 34,
    },
    {
      id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      skills: ["nulla", "anim", "proident", "ipsum", "elit"],
      gender: "male",
      age: 24,
    },
    {
      id: "249b6175-5c30-44c6-b154-f120923736f5",
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      skills: ["adipisicing", "irure", "velit"],
      gender: "female",
      age: 21,
    },
    {
      id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      skills: ["ex", "culpa", "nostrud"],
      gender: "male",
      age: 27,
    }
]
const getUniqueSkills = (users) => {
    const allSkills = users.flatMap(user => user.skills);
    const uniqueSkills = [...new Set(allSkills)];
    return uniqueSkills;
  };
const getTotalBalance = (users) => {
  const filteredUsers = users.filter(user => user.friends.length === 2 && user.age < 30);
  const totalBalance = filteredUsers.reduce((total, user) => total + user.balance, 0);
  return totalBalance;
};
uniqueSkills=getUniqueSkills(users);
totalBalance=getTotalBalance(users);
console.log(uniqueSkills);
console.log(totalBalance);
//3
// Differences between operators spread and rest, examples of their use

// Оператор spread, використовується для розгортання (розширення) масивів або об'єктів. 
// Ось декілька прикладів використання оператора spread:
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Вивід: [1, 2, 3, 4, 5]

const obj1 = { name: 'Sem' };
const obj2 = { ...obj1, age: '20' };
console.log(obj2); // Вивід: { name: 'Sem', age: '20'} 

// Оператор rest використовується для збору аргументів функції в масив або для деструктуризації масивів. 
// Ось кілька прикладів використання оператора rest:
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // Вивід: 1
console.log(rest); // Вивід: [2, 3, 4, 5]
// Приклад rest в функції
function q(...args) {
  console.log(args); 
}
q(1, 'g', 'a','b','');

// Отже, оператор spread використовується для розгортання (розширення) масивів або об'єктів.
//  Він дозволяє копіювати елементи з одного масиву або об'єкту до іншого, 
//  додавати нові елементи чи властивості до існуючих, створюючи таким чином нові структури даних.

// З іншого боку, оператор rest застосовується в контексті функцій 
// і використовується для збору аргументів в масив. Він дає можливість працювати 
// з будь-якою кількістю переданих аргументів, що робить код більш гнучким та ефективним.

// Spread і rest - це два потужні оператори, які допомагають зробити код більш зрозумілим
//  і функціональним, кожен у своєму контексті.

// 4
// Create list on user's names in html document. By click on name display alert 'Hello, {name}'\
const userList = document.getElementById('userList');

users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = user.name;
    listItem.addEventListener('click', () => {
      alert(`Hello, ${user.name}`);
    });
    userList.appendChild(listItem);
  });