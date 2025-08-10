//Exercise 1: 

//initalizing the array 
const nums = [13, 87, 2, 89, 12, 4, 90, 63];

//the map() method loops over the array and multiplies the num*2
const numsTimesTwo= nums.map((num)=> num*2)
console.log("Exercise 1: " + numsTimesTwo)



// Exercise 2:

// Starting code (don't modify this):
const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Extracts first and second value and assigns to new variable
const [firstIngredient, secondIngredient] = pizzaToppings

//Prints the first and second value
console.log("Exercise 2: " + firstIngredient, secondIngredient)



// Exercise 3:

//Created car object and assigned make and model keys with values
const car = {
  make: 'Audi',
  model: 'Q5',
};

//Prints car make and model
console.log("Exercise 3: ")
console.log(car.make);
console.log(car.model);



// ! Exercise 4:

//Creating the morePizzaToppings array
const morePizzaToppings = ['Cheese', 'Sauce'];

//Duplicating the array using the spread "..." 
const uncontroversialPizzaToppings=[...morePizzaToppings];

//Printing the new variable
console.log("Exercise 4: " + uncontroversialPizzaToppings);




// ! Exercise 5:

//First we create the anotherCar object, add keys with values
const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};

// Spreading value of anotherCar to myCar
const myCar = { ...anotherCar };

//Changing make and model to new values
myCar.make='Lexus';
myCar.model='LS430';

//Printing the old values and new values
console.log("Exercise 5: ")
console.log(anotherCar.make , anotherCar.model +'\n' + myCar.make , myCar.model);



//Exercise 6: Dynamic keys in objects

//Define name and assigning a string to propertyName
const propertyName  = "username"; 

//Creating an object called userProfile
const userProfile = {

    //using 'propertyName' as a dynamic key and assigning a value
    propertyName : "Husain",
};

//Console logging the userProfile value to see the results
console.log("Exercise 6: ")
console.log(userProfile); //will get the result: { propertyName: 'Husain' }


//Exercise 7: Import and Export - Done in different files

//Exercise 8:

//Creating a function with new parameters
function printMessage(noun="cat", adjective="orange"){

    //Printing the values with parameters
    console.log("Exercise 8: " + `The ${noun} is ${adjective}`);
}

//prints the message
printMessage()
printMessage("dog", "Golden");


// Exercise 9:

// a. Convert the following `if...else` statement into a ternary:
//
//    if (pizza === 'tasty') {
//      console.log('yum');
//    } else {
//      console.log('yuck');
//    }
//

//Initialize pizza to tasty
const pizza = 'tasty';

// Basically an if statement with ? and :
pizza === 'tasty' ? console.log(`Exercise 9: ` + 'yum') : console.log(`Exercise 9: ` + 'yuck');




// Exercise 10: Setting a website's theme

const localLangConfig = null; // Change to 'es', 'fr', etc., or leave it `null`.

// const lang to intialize the variable and then localLangConfig || 'en'
const lang= localLangConfig|| 'en';

//logging the value of lang
console.log("Exercise 10: " + lang);

const savedUserTheme = null; // Change to 'dark', etc., or leave it `null`.
//the same process as the previous example

//creating a variable called theme
const theme= savedUserTheme|| 'light';
console.log("Exercise 10: " + theme);


// Exercise 11: Optional chaining

// Starting code (don't modify this):
const adventurer = {
  name: 'Alice',
  cat: {
    age: 24,
  }
};
// we put ? to check if there is a value and if there isnt it returns undefined
// without it we get an error called Cannot read properties of undefined (reading 'age')
// there has to be a cat object inside the adventurer property with age otherwise gets undefined

console.log(adventurer.cat?.age)
