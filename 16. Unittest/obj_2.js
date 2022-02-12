// 1. Write a program that count the vowels and store the count into an object
// "ciaoo" -> {"i":1, "a":1, "o":2}


// 2. Given an object where the keys are string and the values number return an array at random order where
// each element is the key multiplied by its value in the objects (ORDER DOES NOT MATTER)
// {"i":1, "a":1, "o":2} -> ["i", "a", "oo"]
// {"i":1, "a":1, "o":2, "male":2} -> ["malemale", "i", "a", "oo"]


// 3. Given an array of string created an object where the key are the element of the array and the value
// the length of that key. Do this operation only if the str has lenght > N (parameter variable).
// ["malemale", "i", "a", "oo", "hey"], 3 -> {malemale: 8, hey:3}


// 5. Given two objects merge them into a new objects. the values will be always number,
// if the keys are present in both objects take only the highest.
// {"hey":5 , "mia":2, "ammmore":10}, {"hey":10, "tolto":2} -> {"mia":2, "ammmore":10, "hey":10, "tolto":2}


// 6. Given an array of string return a new array containing only the str with length > N (par)
// ["ciao", "ciao", "<3"], 3 -> ["ciao", "ciao"]


// 7. Given an array of objects and a specific key return the maximum values between the object of that particular key.
// the keys of the objects could be different, the KEY CAN ALSO NOT BE PRESENT!!
// [{"hey":5 , "mia":2}, {"hey":10 , "mia":2}, {"hey":4 , "mia":2}, {"mia":2}], "hey" -> 10


// 9. Given an array of objects and a particular key return a new array where that key is present.
// Moreover modify the value of that key by multipling it for 2 (expect to be only number)
// [{"nope":2, "hey":5}, {"nope":2}, {"hey":5}], "hey" -> [{"nope":2, "hey":10}, {"hey":10}]


// 8. Given two object return a new object where the information of both are merged on a particular key (SEE EG)
// structure like this
let obj = {
    info: 
    {
        date: "today", 
        pro: "a lot", 
        missing: "a lot",
    },
    "mia":2 ,
}
// {info: {date: "today", pro: "a lot", missing:"a lot"} , "mia":2}, {info: {rest: "here", wanted:"to live"}}, "info" -> {date: "today", pro: "a lot", missing:"a lot", rest: "here", wanted:"to live"}


// 10. Given an array of objects filter them returning a new array where the key product_available = true. 
// the objects will always have the following structure:
let obj = {
    name: "wine",
    stock:
    {
        product_available: true,
        location: "germany"
    },
    cost: "14$"
}
// [
// {name: "wine", stock: {product_available: true, location: "germany"}, cost: "14$"}, 
//  {name: "drink", stock: {product_available: true, location: "italy"}, cost: "14$"}, 
//  {name: "beer", stock: {product_available: false, location: "monaco"}, cost: "14$"}, 
//  ]
// -> [{name: "wine", stock: {product_available: true, location: "germany"}, cost: "14$"}, {name: "drink", stock: {product_available: true, location: "italy"}, cost: "14$"}]


// 11. Do the same operation as before but in this case extract only the products where location is equal to a given parameter
// [
// {name: "wine", stock: {product_available: true, location: "germany"}, cost: "14$"}, 
//  {name: "drink", stock: {product_available: true, location: "italy"}, cost: "14$"}, 
//  {name: "beer", stock: {product_available: false, location: "monaco"}, cost: "14$"}, 
//  ], "italy" -> {name: "drink", stock: {product_available: true, location: "italy"}, cost: "14$"}



// 4. Given an object where the key and the values are both string, swap them.
// the values will become the keys and the keys the values.
// {malemale: "troppo", hey:"forte"} -> {troppo:"malemale", forte:"hey"}