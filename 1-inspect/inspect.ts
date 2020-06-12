/* npx ts-node inspect.ts*/

const inspect = (obj: object): void => {
	Object.entries(obj).forEach(([key, value]) => {
		if (Array.isArray(value)) {
			console.log(`\n${"*".repeat(100)}`);
			console.log(`variable "${key}" is an array`);
			console.table(value);
		} else if (typeof value === "object") {
			console.log(`\n${"*".repeat(100)}`);
			console.log(`variable "${key} is an object`);
			console.table(value);
		} else {
			console.log(`\n${"*".repeat(100)}`);
			console.log(
				`variable "${key}" is a primitive of type ${typeof value}`
			);
			console.log(value);
		}
	});
};

const progrLang = "JavaScript";
const backend = "NodeJS";
const frontend = "ReactJS";
const yearsOfExperience = 1;
const isExpert = false;

const sequence = [
	progrLang,
	backend,
	frontend,
	yearsOfExperience,
	isExpert
];

const topics = { 
	progrLang, 
	backend, 
	frontend, 
	yearsOfExperience,
	isExpert 
};

inspect({
	progrLang,
	backend,
	frontend,
	yearsOfExperience,
	isExpert,
	sequence,
	topics
});

