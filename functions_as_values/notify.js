const notifyByEmail = (emailAddress) => {
  return `Email sent to ${emailAddress}`;
};

const notifyByText = (phoneNumber) => {
  return `Text sent to ${phoneNumber}`;
};

const notify = (details, notifyFunction) => {
  return notifyFunction(details);
};

console.log(notify("hello@makers.tech.test", notifyByEmail));
console.log(notify("+10000000000", notifyByText));
