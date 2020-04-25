function calculateBill(billAmount, taxRate, tipRate = 0.15) {
  const total = billAmount + (billAmount * taxRate) + (billAmount * tipRate);

  return total;
}

const billTotal = `The total bill is $${calculateBill(100, 0.13, undefined)}.`;
console.log(billTotal);