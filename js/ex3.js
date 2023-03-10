/*
   Exercise 3 JavaScript code
*/

const studentList = [
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

const cLastNameResults = studentList.filter(student => student.lastName[0] === "C").map(student => {
    const min = student.scores.reduce((min, score) => Math.min(min, score));
    const max = student.scores.reduce((max, score) => Math.max(max, score));
    const avg = student.scores.reduce((sum, score) => sum + score) / student.scores.length;
    return {
        firstName: student.firstName,
        lastName: student.lastName,
        minScore: min,
        maxScore: max,
        avgScore: avg
    };
});

console.log(cLastNameResults);
