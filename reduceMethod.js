const cart = [
    {itmeId: 1, itemName: 'iPhone 12', price: 58999},
    {itmeId: 2, itemName: 'MacBook', price: 90900},
    {itmeId: 3, itemName: 'MacMini', price: 58990}
]

const total = cart.reduce((acc, currentValue) => {
    return acc += currentValue.price;
}, 0);

console.log(total);



myArray.forEach(console.log);
