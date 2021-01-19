console.log("TEMPLATE SCRIPT WORKING");

function print(firstName,lastName)
{
        //console.log(firstName,lastName);

        //USING TEMPLATE STRING
    console.log(`WELCOME TO THE COURSE ${firstName} ${lastName}`);

}

function createEmail(first,price)
{

    shippingCharge=10;
    console.log(`HII  ${first} THANKS 
    price : $${price}
    SHIPPING CHARGE: $${shippingCharge}
    FINAL TOTAL : $${price+shippingCharge}
    `);
}

print("SOHAIL","SHAIKH");
createEmail("SOHAIL",300)