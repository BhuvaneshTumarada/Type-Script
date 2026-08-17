"use strict";
function calculateAverage(...marks) {
    let total = 0;
    for (const mark of marks) {
        total += mark;
    }
    return total / marks.length;
}
function getGrade(average) {
    if (average >= 90) {
        return "A";
    }
    if (average >= 80) {
        return "B";
    }
    if (average >= 70) {
        return "C";
    }
    return "D";
}
const average = calculateAverage(90, 85, 95, 80);
console.log("Average:", average);
console.log("Grade:", getGrade(average));
