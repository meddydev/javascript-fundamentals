const lowercaseMessage = (string) => {
  return string.toLowerCase();
};

const transform = (string, mutator) => {
  return mutator(string);
};

console.log(transform("WHY ARE YOU SHOUTING?", lowercaseMessage));
// prints 'why are you shouting?'
