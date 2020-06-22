const learnedReact = true;
const learnedReactSpring = false;
const learnedReactThreeFiber = false;

const learnReact = (): Promise<string> =>
  new Promise((resolve, reject) => 
    learnedReact
      ? resolve("I am an expert in React")
      : reject("I need to study react")
  );

const learnReactSpring = (): Promise<string> =>
  new Promise((resolve, reject) => 
    learnedReactSpring
      ? resolve("I am an expert in React Spring")
      : reject("I need to learn React Spring")
  );

const learnReactThreeFiber = (): Promise<string> =>
  new Promise((resolve, reject) => 
    learnedReactThreeFiber
      ? resolve("I am an expert in React Three Fiber")
      : reject("I need to learn React Three Fiber")
  );

interface SetlingPromise {
  status: string,
  value?: string,
  reason?: string
}

const allSettled = (
  promises: Array<Promise<string>>
): Promise<Array<SetlingPromise>> =>
  Promise.all(promises.map(promise =>
    Promise.resolve(promise)
      .then(val => ({ status: "fulfilled", value: val }))
      .catch(err => ({ status: "rejected", reason: err }))
  ));

const separateResults = (results: Array<SetlingPromise>): Array<any> => [
  results
    .filter(result => result.status === "fulfilled")
    .map(result => result.value),
  results
    .filter(result => result.status === "rejected")
    .map(result => result.reason)
];

const getPromisesAsync = async (): Promise<void> => {
  const results = await allSettled([
    learnReact(),
    learnReactSpring(),
    learnReactThreeFiber()
  ]);
  const [fulfilled, rejected]: Array<string> = separateResults(results);
  console.log(fulfilled);
  console.log(rejected);
};

getPromisesAsync();