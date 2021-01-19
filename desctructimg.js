console.log("DESCTRUCKING WORKING");


let state=[

"MAHARASHTRA",
"GUJRAT",
"RAJASTHAN",
"GOA",
"CHENNAI"
];

//NORMAL WAYS OF PRINTING THE ELEMENTS

console.log(state);
console.log(state.includes("uttar pradesh"));


//DESCTRUCTING AN ARRAAY ELEMENT


let [first,second,,,last]=[

    "MAHARASHTRA",
    "GUJRAT",
    "RAJASTHAN",
    "GOA",
    "CHENNAI"
];

console.log(first,second,last);
    