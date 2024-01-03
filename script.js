function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  //   change = change.toPrecision(4);

  let currency = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01].reverse();
  let i = cid.length - 1;
  let totalChangeOfThisKind = 0;
  let count = 0;
  let total = [];

  if (cid.reduce((a, b) => (a += b[1]), 0) < change) {
    return `{status: "INSUFFICIENT_FUNDS", change: []}`;
  }

  //   console.log(cid.reduce((a, b) => (a += b[1]), 0));

  if (change.toFixed(2) > 0) {
    // change.toPrecision(4);
    for (i; i >= 0; i--) {
      //   change.toPrecision(4);
      while ((change / currency[i]).toFixed(2) >= 1 && cid[i][1] > 0) {
        // change.toPrecision(4);
        totalChangeOfThisKind += currency[i];
        count += 1;
        change -= currency[i];
        change.toFixed(2);
        cid[i][1] -= currency[i];
      }
      //   change.toPrecision(4);
      total.push([cid[i][0], totalChangeOfThisKind.toFixed(2)]);
      totalChangeOfThisKind = 0;
      count = 0;
    }
  }
  //   if (
  //     cid.every((e) => {
  //       e[1] <= 0;
  //     }) &&
  //     change <= 0
  //   ) {
  //     return `{status: "CLOSED", change:${cid}}`;
  //   } else if (change <= 0 && cid.some((e) => e[1] > 0)) {
  //     let obj = { status: "OPEN", change: [] };
  //     obj.change = total.filter((e) => e[1] != 0);
  //     return obj;
  //   } else if (change > 0) {
  //     return `{status: "INSUFFICIENT_FUNDS", change: []}`;
  //   }

  //   return [change, cid];
}

let test = checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

console.log(test);

console.log(-3.0878077872387166e-16 <= 0);
