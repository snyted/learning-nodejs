const objs = [
  {
    name: "Vitor",
    age: 24,
    is_studying: true,
    study_details: {
      program_language: ["JavaScript", "TypeScript"],
      looking_for_job: true,
    },
    hobbies: ["Programar", "Assistir", "Ler"],
  },
  {
    name: "Laura",
    age: 21,
    is_working: true,
    working_details: {
      occupation: "teacher",
      enterprise: "public school",
    },
    is_studying: false,
    looking_for_job: true,
    hobbies: ["Animes", "Series", "Ler"],
  },
];

// JSON
// Convertendo obj p/ JSON
const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData);

// Convertendo JSON p/ obj
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData);

objData.map((user) => console.log(user.name));

const userStuding = objData.filter((user) => user.hobbies);

console.log(userStuding);
