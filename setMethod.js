const myArray = ["Apple", "Banana", "Mango", "Orange", "Chiku", "Pomegranate", "Chiku", "Mango"];

// no order, no index based access, duplicates not allowed, order not guaranteed in Sets.

const arraySet = new Set(myArray);

console.log(arraySet);

arraySet.add("Papaya");

if(arraySet.has("Papaya")){
    console.log("\nHai Isme Pappitta");
}
else{
    console.log("\nHai Ni Isme Pappitta");
}