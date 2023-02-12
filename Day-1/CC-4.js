let bill=430;
let tip=(bill>49 && bill<301)?bill*0.15:bill*0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and total value is ${bill + tip}`);
