function formatIndianCurrency(num) {
  const [integerPart, decimalPart] = num.toString().split('.');

  let lastThree = integerPart.slice(-3);
  let other = integerPart.slice(0, -3);

  if (other !== '') {
    lastThree = ',' + lastThree;
  }

  const formatted = other.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;

  return decimalPart ? `${formatted}.${decimalPart}` : formatted;
}

//  Example
console.log(formatIndianCurrency(123456.7891));   // 1,23,456.7891
console.log(formatIndianCurrency(987654321));     // 98,76,54,321
console.log(formatIndianCurrency(1234.56));       // 1,234.56
