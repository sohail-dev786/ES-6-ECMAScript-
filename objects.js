console.log("Objects Works");


function details(first,last)
{

    return{

        first:first,
        last:last,
        myFunction:function()
        {
            console.log(`Welcome ${first} ${last} !!`);
        }
    }
}

details("SOHAIL","SHAIKH").myFunction();

// CREATING OBJECT WITH SPREAD OPERATOR


let dayTime={
    breakfast:"EGG BREAD",
    lunch:"pizza"
}

let nightTime="Chicken Biryani";

let packAll={
    ...dayTime,
    nightTime
}

//lets Print the  PackAll
console.log(packAll);


//DESTRUCTING OBJECTS

let recipe={
    name:"Chicken Biryani",
    price:200,
    ingredients:[
        "Ginger",
        "Garlic",
        "Coriander",
        "Chicken Masala",
        "Rice",
        "Chicken",
        "Lemon",
        "Salt",
        "Etc"
    ]
}

console.log(recipe);

//DESTRUCTING OBJECT
let {name,price}={
    name:"Chicken Biryani",
    price:200,
    ingredients:[
        "Ginger",
        "Garlic",
        "Coriander",
        "Chicken Masala",
        "Rice",
        "Chicken",
        "Lemon",
        "Salt",
        "Etc"
    ]
}


console.log(name,"-->Rs",price,"Plate");



//LETS DO SOME ADVANCE THINK :)
const vacation={

    destination:"Goa",
    activity:"Swimming",
    price:10000
}

function planningVacation({destination,activity})
{

    return  `Welcome to ${destination} and Enjoy Your ${activity}`;
};


console.log(planningVacation(vacation));
