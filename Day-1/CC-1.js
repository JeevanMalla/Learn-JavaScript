// CC - "coding challenge"

let mark_height=1.69;
let marks_weight=78;
let john_height=1.92;
let john_weight=92;
let markHigherBMI=bmi(mark_height,marks_weight)>bmi(john_height,john_weight)
function bmi(height,weight){
    return weight/height ** 2;
}
console.log(markHigherBMI);