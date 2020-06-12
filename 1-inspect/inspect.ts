/* npx ts-node inspect.ts*/

interface Primitive {
	varName: string,
	varValue: boolean | number | string
}

const processPrimitive = ({ varName, varValue }: Primitive): void => {
	console.log(`\n${"*".repeat(100)}`);
	console.log(
		`variable "${varName}" is a primitive of type ${typeof varValue}`
	);
	console.log(varValue);
};

const inspect = (obj: object): void => {
	console.log("\n\n\nSTART");
	Object.entries(obj).forEach(([varName, varValue]) => {
		if (Array.isArray(varValue)) {
			console.log(`\n${"*".repeat(100)}`);
			console.log(`variable "${varName}" is an array`);
			console.table(varValue);
		} else if (typeof varValue === "object") {
			console.log(`\n${"*".repeat(100)}`);
			console.log(`variable "${varName} is an object`);
			console.table(varValue);
		} else {
			processPrimitive({varName, varValue});
		}
	});
	console.log("\nEND\n\n\n");
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

const currentTopics = { 
	progrLang, 
	backend, 
	frontend, 
	yearsOfExperience,
	isExpert 
};

const futureTopics = {
	currentTopics,
	futureTopics: {
		mobile: "React-Native",
		graphs: "WebGL, Threejs, BabylonJS, react-three-fiber"
	}
};

/*
console.log(Object.keys(futureTopics).length);

Object.entries(futureTopics).forEach(([key, value]) => {
	console.table(value);
});
*/

inspect({
	progrLang,
	backend,
	frontend,
	yearsOfExperience,
	isExpert,
	sequence,
	currentTopics
});