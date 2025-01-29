interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
};

const student1: Student = {
	firstName: "Clément",
	lastName: "Callejon",
	age: 25,
	location: "Toulouse"
};

const student2: Student = {
	firstName: "Mael",
	lastName: "Ezanic",
	age: 28,
	location: "Toulouse"
};

const studentsList: Student[] = [student1, student2];

console.log(studentsList);
