function willSuccess(arr){

if(!Array.isArray(arr)){
return "Invalid"
}

let passMark = 0;
let failMark = 0;

for(let mark of arr){
    if(mark >= 50){
        passMark++;
    }
    else{
        failMark++;
    }
}


return failMark < passMark;
}




console.log(willSuccess(11, 22, 33, 44, 55, 66, 77, 88, 99, 111,222));
console.log(willSuccess([11, 22, 33, 44, 55, 66, 77, 88, 99, 111,222]));
console.log(willSuccess("Hello Shruti"));
console.log(willSuccess([]));
