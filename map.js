console.log("MAPS WORK");

let course= new Map();

course.set("java",{description:"SPRING BOOT",description1:"SPRING MVC"});
course.set("react",{description:"UI"}); 

console.log(course);
console.log(course.java); //it will return an undefined

//so here we have to call a get method to print map values

console.log(course.get("java"));
console.log(course.get("react"));