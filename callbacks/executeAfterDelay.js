const printHello = () => {
  console.log("Hello!");
};

const executeAfterDelay = (s, callbackFunction) => {
  ms = s * 1000;
  setTimeout(callbackFunction, ms);
};

executeAfterDelay(5, printHello);
