

function digitize(n) {
    // n = n+'';
    n = String(n);
    const reversedArrNum = new Array();

    const newSplitArray = n.split('');
  
    reversedArrStr = newSplitArray.reverse();
  
    for (let i = 0; i < reversedArrStr.length; i++)
     reversedArrNum.push(parseInt(reversedArrStr[i]));
    
    return reversedArrNum;
}

let ans = digitize(123456789);
console.log(ans);