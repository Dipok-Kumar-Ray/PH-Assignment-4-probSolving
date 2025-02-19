function  calculateSleepTime( arr ) {
   if(!Array.isArray(arr) || arr.some(el => typeof el !== "number")) {

    return "Invalid"
   }

   let totalSeconds = arr.reduce((sum, num) => sum + num, 0);


   let hour = Math.floor(totalSeconds / 3600);
   let minute = Math.floor((totalSeconds % 3600 / 60));
   let second = totalSeconds % 60;


   return {hour, minute, second}
}


console.log(calculateSleepTime([3600, 1800, 3663]));
console.log(calculateSleepTime([3600, "1800", 3663]));