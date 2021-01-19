console.log("Spread Operator Working");
//SPREAD OPERATOR IS BASICALLY USED FOR ARRAY TRANSFROMATION 
let books=["Java","Python","Css","Html"];
let fruits=["Mango","Apple","Grapes"];

//IT WILL GIVE U AN NESTED ARRAY
let animals=["Fish","Chicken","Camel",...books,...fruits];

console.log(animals);