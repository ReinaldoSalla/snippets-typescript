const asyncSleep = (time: number): Promise<string> => (
  new Promise((resolve) => (
    setTimeout(() => resolve(`Slept for ${time}`), time)
  )
));

const processDataInParallel1 = async (): Promise<void> => {
  console.log('started process #1');
  await asyncSleep(2000);
  console.log('finished process #1');
};

const processDataInParallel2 = async (): Promise<void> => {
  console.log('started the process #2');
  await asyncSleep(1000);
  console.log('finished the process #2');
};

processDataInParallel1();
processDataInParallel2();

