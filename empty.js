const arr = [1, 2, 3, 4, 5, 6, 7];

for(let i = 1; i < arr.length; i++){

    if(i == 5){
        continue;
    }

    console.log(arr[i]);
}