let arr = [17, 21, 23];
const forecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    str += arr[i] + " in " + i + " days " + "... ";
  }
  console.log(str);
};
forecast(arr);
