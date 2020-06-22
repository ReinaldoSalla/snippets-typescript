const learnedJavaScript = false;
const learnedNode = true;
const learnedReact = true;

const learnJavaScript = (): Promise<string> => {
  return new Promise((resolve, reject) => {
    return learnedJavaScript
      ? resolve("I am an expert in JavaScript")
      : reject("I have to learn JavaScript");
  });
};

const learnNode = (jsStatus: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    return learnedNode
      ? resolve(`${jsStatus} - I am an expert in Node`)
      : reject(`${jsStatus} - I have to learn Node`);
  });
};

const learnReact = (nodeStatus: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    return learnedReact
      ? resolve(`${nodeStatus} - I am an expert in React`)
      : reject(`${nodeStatus} - I have to learn React`);
  });
};

const getPromisesThenExplicit = (): void => {
  learnJavaScript()
    .then((jsStatus: string) => {
      return learnNode(jsStatus)
    })
    .then((nodeStatus: string) => {
      return learnReact(nodeStatus)
    })
    .then((reactStatus: string) => {
      console.log(reactStatus)
    })
    .catch(err => console.error(err));
};

const getPromisesThenImplicit = (): void => {
  learnJavaScript()
    .then((jsStatus: string) => learnNode(jsStatus))
    .then((nodeStatus: string) => learnReact(nodeStatus))
    .then((reactStatus: string) => console.log(reactStatus))
    .catch(err => console.error(err))
};

const getPromisesAsync = async (): Promise<void> => {
  try {
    const jsStatus = await learnJavaScript();
    const nodeStatus = await learnNode(jsStatus);
    const reactStatus = await learnReact(nodeStatus);
    console.log(reactStatus);
  } catch (err) {
    console.error(err);
  }
};

getPromisesAsync();