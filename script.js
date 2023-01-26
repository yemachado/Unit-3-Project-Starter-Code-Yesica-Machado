/* Declare variables below to save the different sections (divs) of your story*/
let title = document.querySelector(".title");
let StoryPart1 = document.querySelector(".story-opening");                                 
let Buttons = document.querySelector(".buttons"); 
let StoryPart2Pizza = document.querySelector(".option-one-screen");
let StoryPart2Burger = document.querySelector(".option-two-screen");
let StoryPart3Pizza = document.querySelector(".option-one-end");
let StoryPart3Burger = document.querySelector(".option-two-end");
let PizzaButton = document.querySelector(".option-one"); 
let BurgerButton = document.querySelector(".option-two"); 
let Pizzapicture = document.querySelector(".pizzapicture");
/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
*/

PizzaButton.onclick=function(){
StoryPart2Pizza.style.display="block";
 StoryPart1.style.display="none";
};

StoryPart2Pizza.onclick=function(){
StoryPart3Pizza.style.display="block";
};

BurgerButton.onclick=function(){
StoryPart2Burger.style.display="block";
StoryPart1.style.display="none";
StoryPart2Pizza.style.display="none";
StoryPart3Pizza.style.display="none";
    
};

StoryPart2Burger.onclick=function(){
StoryPart3Burger.style.display="block";
};