const checkLength = (phoneNumber) => {
  if (phoneNumber.length <= 10) {
    return true;
  } else {
    return false;
  }
};

const filterLongNumbers = (phoneNumbers) => {
  return phoneNumbers.filter(checkLength);
};

const numbers = [
  "1763687364",
  "4763687363",
  "7867867862",
  "aaaaaaaabbbbbbbcccccdddddddd",
];

console.log(filterLongNumbers(numbers));
console.log(filterLongNumbers(["4763687363", "7867867862"]));
console.log(filterLongNumbers([]));
