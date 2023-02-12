//using CC-1 to testing our skills with if statement
let mark_height=1.69;
let marks_weight=78;
let john_height=1.92;
let john_weight=922;
let markHigherBMI=bmi(mark_height,marks_weight)>bmi(john_height,john_weight)
function bmi(height,weight){
    return weight/height ** 2;
}
if(markHigherBMI){
    let diffBMI=bmi(mark_height,marks_weight)-bmi(john_height,john_weight);
    console.log(`Mark's BMI is ${diffBMI} greater than John's`);
}
else{
    let diffBMI=bmi(mark_height,marks_weight)-bmi(john_height,john_weight);
    console.log(`John's BMI is ${-diffBMI} greater than Mark's`);
}