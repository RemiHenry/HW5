/*
   Exercise 4 JavaScript code
*/

let studentList = [
   {
       firstName: "Allan",
       lastName: "Able",
       scores: [95, 85, 92, 98]
   },
   {
       firstName: "Amy",
       lastName: "Alexander",
       scores: [80, 88, 100]
   },
   {
       firstName: "Betty",
       lastName: "Barns",
       scores: [70, 80, 90, 100]
   },
   {
       firstName: "Bob",
       lastName: "Bones",
       scores: [75, 85, 95, 85]
   },
   {
       firstName: "Cindy",
       lastName: "Chase",
       scores: [95, 90, 92, 98]
   },
   {
       firstName: "Charles",
       lastName: "Chips",
       scores: [88, 99, 90]
   },
];

studentList = studentList.map(student => {
   student.scores = student.scores.map(score => score + 5);
   let avg = student.scores.reduce((sum, score) => sum + score) / student.scores.length;
   student.scores.push(avg);
   return student;
});

for (const element of studentList) {
   console.log(`Full name (last, first): ${element.lastName}, ${element.firstName}`);
   console.log(`Updated scores are: ${element.scores}`);
}