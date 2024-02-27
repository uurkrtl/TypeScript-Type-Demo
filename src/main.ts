//Step 1: Write a function that outputs a student with their grades, where a student should be output with first name, last name, age, and a list of grades.

type Student = {
  firstName: string;
  lastName: string;
  age: number;
  grades: number[];
};

let student: Student = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: [1, 4, 3, 1, 3, 2, 1, 2]
};

console.log("Step 1");
console.log(student.firstName + " " + student.lastName + " (" + student.age + ")");
console.log("=".repeat(30));
console.log("Grades: " + student.grades.join(", "));
console.log("\n");

/*
Step 2: Allow strings and numbers as grades Task:
Ensure that besides grades as numbers (German system), values A to F (American system) are also supported as grades. The function should output the student's grades.
 */

type Student2 = {
  firstName: string;
  lastName: string;
  age: number;
  grades: (number | string)[]
};

let student2: Student2 = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: ["A", 2, "F", 3, 1, "B", 2, 5]
};

console.log("Step 2");
console.log(student2.firstName + " " + student2.lastName + " (" + student2.age + ")");
console.log("=".repeat(30));
console.log("Grades: " + student2.grades.join(", "));
console.log("\n");

/*
Step 3: Allow undefined as a value (displayed as *) Task:
Ensure that "undefined" is now supported as a value in the grades. The function should output the student's grades and represent "undefined" as "*". (For example, if the student was absent and not graded).
 */

type Student3 = {
  firstName: string;
  lastName: string;
  age: number;
  grades: (number | string | undefined)[]
};

let student3: Student3 = {
    firstName: "Anton",
    lastName: "Meier",
    age: 17,
    grades: ["A", 2, undefined, 3, 1, "B", undefined, 5]
};

console.log("Step 3");
console.log(student3.firstName + " " + student3.lastName + " (" + student3.age + ")");
console.log("=".repeat(30));
console.log("Grades: " + student3.grades.map(grade => grade === undefined ? "*" : grade).join(", "));
console.log("\n");

/*
Step 4: Print a list of all students in the console Task:
Write a function that prints a list of all students in the console.
 */

let students: Student3[] = [
    {
        firstName: "Anton",
        lastName: "Meier",
        age: 16,
        grades: [1, 4, 3, 1, "A", undefined, 1, 2]
    },
    {
        firstName: "Berta",
        lastName: "Müller",
        age: 17,
        grades: ["A", undefined, 1]
    },
    {
        firstName: "Cäsar",
        lastName: "Schmidt",
        age: 17,
        grades: ["A", 1, undefined, 3, 2, 4, 5]
    }
    ];

function printStudents(students: Student3[]): void {
    students.forEach(student => {
        console.log(student.firstName + " " + student.lastName + " (" + student.age + ")");
        console.log("=".repeat(30));
        console.log("Grades: " + student.grades.map(grade => grade === undefined ? "*" : grade).join(", "));
        console.log();
    });
}

console.log("Step 4");
printStudents(students);
console.log("\n");