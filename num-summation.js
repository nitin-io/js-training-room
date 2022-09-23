function sum (numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
}

let ans = sum([1, 2, 3, 4]);
console.log(ans);