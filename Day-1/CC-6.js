let tip=bill => (bill>49 && bill<301)?bill*0.15:bill*0.2;
bills=[125,555,44];
tips=[tip(bills[0]),tip(bills[1]),tip(bills[2])];
total=[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];
console.log(`${bills}
${tips}
${total}`);