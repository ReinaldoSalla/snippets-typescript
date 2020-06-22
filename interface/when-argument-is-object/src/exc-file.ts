
interface ProgrLang {
  primary: string
  [key: string]: any
}

const createProject = (
  progrLang: { [key: string]: any, primary: string }
): object => {
  console.log(progrLang.primary);
  return {
    ...progrLang,
    yearsOfExperience: 10,
    isExpert: true
  };
};

const createProject2 = (progrLang: object): object => {
  console.log(`
    checking if progrLang.primary is 
    defined = ${progrLang.hasOwnProperty("primary")}
  `.replace(/ {2}/g, "").replace(/(\n|\r|\t)/gm, ""));
  return {
    ...progrLang,
    yearsOfExperience: 10,
    isExpert: true
  };   
};

const progrLang = {
  primary: "JavaScript",
  extension: "TypeScript",
  yearsOfExperience: 1,
  isExpert: false
};

const newObj = createProject2(progrLang);

console.log(newObj);