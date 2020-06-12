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

export default inspect;