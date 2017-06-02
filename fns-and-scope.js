//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
 
 function isTyler(name){
   if (name === "Tyler"){
     return true;
   }else if(name !== "Tyler"); 
   return false;
 }




//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName(){
  return prompt("Enter your name");
}



//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.
 
  function welcome(){
    return alert("Welcome, " + getName());
}




//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  // Arguments are the real values passed to the parameters, and parameters are the place holding names.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  // NaN, Undefined, Null, 0, false, ""
  // if its not one of those six above ^ then it is a truthy



//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  function myName(){
    return "Alex";
  }

  


//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName;


//Now alert the result of invoking newMyName
alert(newMyName());

//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  function outerFn() {
   return function () {
      return "Alex";
    }
  }

//Now save the result of invoking outerFn into a variable called innerFn.

 var innerFn = outerFn();

//Now invoke innerFn.
innerFn;