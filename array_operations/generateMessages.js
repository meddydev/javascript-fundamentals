const namesAndDiscounts = [
  { name: "Anna", discount: 50 },
  { name: "Laura", discount: 40 },
  { name: "Josh", discount: 30 },
  { name: "Min", discount: 50 },
  { name: "Karla", discount: 60 },
];

const personalMessage = (nameAndDiscount) => {
  return `Hi ${nameAndDiscount.name}! ${nameAndDiscount.discount}% off our best candies for you today!`;
};

const generateMessages = (namesAndDiscountsList) => {
  return namesAndDiscountsList.map(personalMessage);
};

console.log(generateMessages(namesAndDiscounts));
