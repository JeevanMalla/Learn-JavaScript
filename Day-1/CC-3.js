let dolphins_score=200;
let kolas_score=200;
if(dolphins_score>=100 && kolas_score>=100){
    if(dolphins_score>kolas_score){
        console.log("Dolphin's wins the trophy");
    }
    else if(dolphins_score<kolas_score){
        console.log("kola's wins the trophy");
    }
    else{
        console.log("game ends draw");
    }
}
else if(dolphins_score<100 && kolas_score<100){
    console.log("No one wins the trophy");
}
else{
    if(dolphins_score<100){
        console.log("kola's wins the trophy");
    }
    else{
        console.log("Dolphin's wins the trophy");
    }
}