const mark = {
    fullname : "Mark",
    mass : 78,
    height : 1.69,
    calBMI : function(){
        return this.mass/this.height ** 2;
    }
};
const john = {
    fullname : "John",
    mass : 92,
    height : 1.95,
    calBMI : function(){
        return this.mass/this.height ** 2;
    }
};
console.log(mark.calBMI()>john.calBMI()?`Mark's BMI (${mark.calBMI()}) is higher than John's BMI (${john.calBMI()})`:`John's BMI (${john.calBMI()}) is higher than Mark's BMI (${mark.calBMI()})`);
