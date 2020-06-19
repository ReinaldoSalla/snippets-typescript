type TPrimitive = boolean | null | undefined | symbol | number | string

interface Primitive {
	varName: string,
	varValue: TPrimitive
}

interface NonPrimitive {
  varName: string,
  varValue: Array<TPrimitive> | object
}

const processPrimitive = ({ varName, varValue }: Primitive): void => {
	console.log(`\n${"*".repeat(100)}`);
	console.log(
		`variable "${varName}" is a primitive of type ${typeof varValue}`
	);
	console.log(varValue);
};

const processNonPrimitive = (
  { varName, varValue }: NonPrimitive,
  type: string
): void => {
  console.log(`\n${"*".repeat(100)}`);
  console.log(`variable "${varName}" is an ${type}`);
  console.log(varValue);
};

const inspect = (obj: object): void => {
	console.log("\n".repeat(5));
	Object.entries(obj).forEach(([varName, varValue]) => {
		if (Array.isArray(varValue)) {
      processNonPrimitive({ varName, varValue }, "array");
		} else if (typeof varValue === "object") {
			processNonPrimitive({ varName, varValue }, "object");
		} else {
			processPrimitive({ varName, varValue });
		}
	});
	console.log("\n".repeat(5));
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
  mobile: "react-native",
  graphics: ["WebGL", "Three.js", "react-three-fiber"],
  ai: {
    areas: ["image", "sound", "text"],
    applications: ["chatbot", "recomendation", "facial recognition"]
  }
};

inspect({
	progrLang,
	backend,
	frontend,
	yearsOfExperience,
	isExpert,
	sequence,
	currentTopics,
  futureTopics,
  futureTopicsDotMobile: futureTopics.mobile
});