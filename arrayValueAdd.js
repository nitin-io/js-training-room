const array = [-6, -20, -1, -10, -12];
if (array != null){
    let highestNum = 0;
    for(let i = 0; i < array.length; i++) {
        if(highestNum < array[i]){
            highestNum = array[i];
        }
    }
    
    let lowestNum = highestNum;
    for(let i = 0; i < array.length; i++) {
        if(lowestNum > array[i]) {
            lowestNum = array[i];
        }
    }

    let total = 0;
    for(let i = 0; i < array.length; i++) {
        if (array[i] == highestNum || array[i] == lowestNum){
            continue;
        }
        else {
            total += array[i];
        }
    }
    return total;
}
else {
    return 0;
}

console.log(total);