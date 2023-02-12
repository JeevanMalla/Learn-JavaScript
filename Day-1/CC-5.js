var calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;
const avgDolphins=calcAverage(85,54,41);
const avgKolas=calcAverage(23,34,27);
function checkWinner(avgDolphins,avgKolas){
    if(avgDolphins>=2*avgKolas) console.log(`dolphins win (${avgDolphins} vs ${avgKolas})`);
    else if(2*avgDolphins<=avgKolas) console.log(`kolas win (${avgKolas} vs ${avgDolphins})`);
    else console.log("game is draw");
}
checkWinner(avgDolphins,avgKolas);

