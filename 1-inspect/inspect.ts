/* npx ts-node inspect.ts*/

interface Primitive {
	[key: string]: boolean | number | string
}

const processPrimitive = (obj: Primitive): void => {
	const varName = Object.keys(obj)[0];
	const varValue = Object.values(obj)[0];
	console.log(`\n${"*".repeat(100)}`);
	console.log(`variable "${varName}" is a primitive of type ${typeof varName}`);
	console.log(varValue);
};

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
			// how can I send the varName and the varValue
			const test = {
				key: key,
				value: value
			};
			console.log(test);
			//processPrimitive({key, value});
		}
	});
	console.log("\nEND\n")
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

console.log(Object.keys(futureTopics).length);

Object.entries(futureTopics).forEach(([key, value]) => {
	console.table(value);
});

inspect({
	progrLang,
	backend,
	frontend,
	yearsOfExperience,
	isExpert,
	sequence,
	currentTopics
});