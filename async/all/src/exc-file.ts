const learnedPromises: boolean = true;
const learnedReduce: boolean = false;
const learnedClosures: boolean = false;

const learnPromises = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    return learnedPromises
      ? resolve("I am an expert on Promises")
      : reject("I need to learn Promises");
  });
};

const learnReduce = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    return learnedReduce
      ? resolve("I am an expert on Reduce")
      : reject("I need to learn Reduce");
  });
};

const learnClosures = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    return learnedClosures
      ? resolve("I am an expert on Closures")
      : reject("I need to study Closures");
  });
};


const getPromisesThen = (): void => {
  Promise.all([learnPromises(), learnReduce(), learnClosures()])
    .then((results: Array<string>) => {
      results.forEach(result => console.log(result))
    })
    .catch(err => console.error(err))
};

const getPromisesAsync = async (): Promise<void> => {
  try {
    const results = await Promise.all([
      learnPromises(),
      learnReduce(),
      learnClosures()
    ]);
    results.forEach(result => console.log(result));
  } catch (err) { 
    console.error(err);
  }
};

getPromisesAsync();

