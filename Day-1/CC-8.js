let bills=[22,295,176,440,37,105,10,1100,86,52];
let tips=[];
let totals=[];
let tip=bill => (bill>49 && bill<301)?bill*0.15:bill*0.2;
for(let i=0;i<bills.length;i++){
    tips[i]=tip(bills[i]);
    totals[i]=tips[i]+bills[i];
}
console.log(`${tips} 
${totals}`);