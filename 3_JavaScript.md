# JavaScript Basic

Why do we call it "the interactive glue between HTML and CSS"? 

Actually, this description does not do justice to JavaScript, which can do far more than just act as glue. JavaScript can be run outside of the browser (on a nodeJS interpreter on a remote server, or in scripts run by the operating system), but for this intro course, we focus on "JavaScript" in the browser.

```
<!DOCTYPE html>
<html lang="en">
<head>
  <title>JavaScript and HTML</title>
  <meta charset="utf-8"/>
  <script>
    function changeTitle() {
      var title = document.querySelector("#mainTitle");
      title.innerHTML += "<br>This new <u>title</u> has been changed from JavaScript!";
    }
  </script>
</head>
  <body>
    <h1 id="mainTitle">My home page</h1> 
    <p>This is an example of interactivity between JavaScript and the HTML content of a document.</p>
    <button onclick="changeTitle();">Click me to change the title of the page</button>
  </body>
</html>
```

What can be done with JavaScript:

1) interact with the HTML and CSS content of a document, respond to events
We have already seen three examples in previous parts of this week's course material. This first example used the selector API for selecting a particular element in the document (the main title) and the DOM API for modifying its content.

An API is an application programming interface. In the case of JavaScript, the DOM API is implemented natively by the browser, and you can call several functions/methods or access properties of the DOM:  an object that represents the document (the Web page). 
It uses the selector API to target a particular part of the DOM (in our case, the main title of the page), the HTML element with an id attribute equal to "mainTitle". The selector API uses the same syntax as CSS to select elements in the document. In our case, "#mainTitle" is a selector value that means "the element whose id is equal to mainTitle". It uses the DOM API to change the HTML content of the selected element, It listens to click events in order to call the changeTitle() function when we click on the button And it executes the whole action (changing the title text) in a function (a block of code that is executed only when we call it by adding a parenthesis after its name, followed by a semi colon). The second example is nearly the same except that we changed the name of the function, and instead of using the DOM API to update the text content of the main title, we use its style property to change its look and feel. Using the style property is a way of altering the CSS property values of this HTML element.

**all the CSS properties are written out in CamelCase: the CSS name background-color becomes backgroundColor, text-size becomes textSize, border-color becomes borderColor etc.**

2) use numerous APIs in addition to the DOM and selector APIs: multimedia, drawing, animating, geolocation, webcam, etc.
Your browser comes with a lot of different "libraries" that are called "standards APIs" for "application programming interfaces". Such APIs are "W3C standards" and are present in all Web browsers that follow the Web Standards. You will have APIs for manipulating multimedia (audio and video), geolocation (getting the longitude and latitude), orientation (on mobile devices), accessing the webcam or the microphone, etc. In a later section we will provide a set of examples that use some of the most useful APIs provided by your Web browser.

3) work with remote data / speak with a remote HTTP Web server
You can also download or upload data from your browser to a remote Web server. When this is done from JavaScript the popular term to describe such operations is "AjaX" (Asynchronous JAvascript and Xml), even though XML is not used in any examples you'll see in this course (XML is a language for describing structured data that was very popular a few years ago).

## Variables

In order to remember a value, programming languages share the concept of "variables". When you write programs, you will need to store values in the computer's memory. By saving these values in "variables", by giving them a "name" (we call it an identifier), you can reuse them later for display, for computations, etc.

JavaScript is weakly typed. Each variable is declared with the keyword var or let. So you are not required to specify the type of variable you are creating. After the keyword "var" and a space, just give the name of the variable.

- Name conventions for variables

  - The camelCase notation is preferred: mySpaceShip, sumOfAllGrades, etc.
  For a variable, the first letter is lowercase and each first letter of each word is capitalized. Example: var myVariableName


- Constants

Constants are variables that cannot be modified after a value has been set. With ES2015/2016 it is recommended that you use the keyword const instead of var to declare them. This means that an error will be raised if you try to change their value in the future.

```
const myConst = 20;
```

- Let

The variable created with the let means that the variable is local to the block in which is created!

```
let a = 1;

if {true}{
  let a = 4;
  console.log(a) // = 4
}

console.log(a) // = 1
```

## Objects

We have already encountered objects in different examples. You can easily recognize these objects:

They are declared using "{" and "}", such as in var p = {givenName:'Michel', familyName: 'Buffa'}, givenName and familyName are called "properties" and Michel and Buffa are their respective values.
We are using the "." operator to access their properties or methods. Example : daysOfTheWeek.length (arrays are objects too - special ones, but objects), or document.body or window.innerWidth (try typing that in the devtool console). There are plenty of predefined objects in JavaScript (window, document, navigator, etc.). We have also used console.log(...), and indeed console is a predefined JavaScript object. With the object var p = {givenName:'Michel', familyName: 'Buffa'}, we can access the properties the same way, with: p.givenName and p.familyName.

## Functions

Functions with a variable number of parameters
An array named "arguments" is created automatically in each function, it contains all the call parameters of the function:

```
function f() {
   return arguments;
}
...
f();
// returns []
...
f( 1, 2, 3, 4, true, 'Michel Buffa');
// returns [1, 2, 3, 4, true, "Michel Buffa"]
```

# Modifying an HTML document

We've already seen some examples that modify the content of the document dynamically. We changed a title by clicking on a button, we displayed the value of a variable named x in the previous section, etc.

The browser comes with some very powerful APIs (Application Programming Interfaces - a set of predefined objects/functions/variables you can use):

- "**The selection API**" is used for "selecting elements in the document". It uses the same syntax as CSS selectors. 

- The "**DOM API**" for "Document Object Model" API. When we used document.body.innerHTML += "\<p>The value of x is " + x + "\</p>"; 

- in a previous example, we used the DOM API for adding content to the body of the page (page = document).
Another API is called the **HTML Table JavaScript API**, and is useful for building tables on the fly.

```
var tableBody = document.querySelector("#tableContactBody");

// Add a new row at the end of the table
var newRow   = tableBody.insertRow();

// add  new cells to the row
var firstNameCell  = newRow.insertCell();
firstNameCell.innerHTML = firstName;
```

## CSS on fly

element.style.cssProperty = '23px';

```
var divElem;

function init() {
  console.log("page loaded and DOM is ready");
  
  // use the selection API to select the div
  divElem = document.querySelector("#theDiv");
}

var currentImage = 0;
var leftPos = 0;

function animateMario() {
  drawMario(currentImage);
  // next time, show next sprite/subimage
  currentImage = (currentImage +1) % 3;
  // next time, move mario 5 pixels to the right
  leftPos += 5;
  // And if he moved 100 pixels, start back from the left
  if(leftPos >= 100) 
    leftPos = 0;
}

function drawMario(indexImage) {
  // set the left pos of the div using the left margin
  divElem.style.marginLeft = leftPos + "px";
  // change the width and height of the div
  divElem.style.width = "22px";
  divElem.style.height = "32px";
  // remove the text inside the div
  divElem.innerHTML = "";
  // set the background image
  divElem.style.backgroundImage = "url(https://mainline.i3s.unice.fr/mooc/marioSprite.png)";
  // remove the background color
  divElem.style.backgroundColor = "transparent";
  // select the starting pos in the background image
  var offset = indexImage * 24;
  divElem.style.backgroundPosition  = offset + "px";
}
```

## Adding interactivity

With JavaScript, you can react to user interactions (keyboard, mouse, gamepad), to changes in the lifecycle of your document (page has just loaded or resized, screen has been rotated on a mobile device), or to be notified when a long process has been completed (loading a large image or sound from the network).

We've already seen how we can make a \<button> react to a mouse click with *\<button **onclick="func()"**>Click me\</button>*

- \<body onload='init()'>
- \<input id='inputField' type='text' oninput='func()'> // to access document.getElementById('inputField).value

# Logical Operator

- & (AND)  
usage example : if ((x  > 0) && (x < 10)) {
                 console.log('x is strictly positive and less than 10');
             }

 - || (OR)
usage  example : if ((x  > 0) || (x == -5)) { 
                 console.log('x is positive or equal to -5'); 
             }

- ! (NOT)
usage example : if (!(x  > 0)) { 
                 console.log('x is not positive (x is less or equal to 0'); 
             }


Implicit conversions of non boolean values in expressions
Used with logical operators or within statements, non-boolean values are implicitly converted to booleans.  

**All the following values are evaluated as false :

- false
- undefined
- null
- 0
- NaN
- the empty string ''**


- What is the difference between == and === in JavaScript?

Equal (==)
Returns true if the operands are strictly equal with type conversion.

Strict equal (===)
Returns true if the operands are strictly equal with no type conversion.

- Specific case of NaN

As we have already seen, JavaScript has some special values. One of them is NaN: “Not-a-Number”. 
NaN has this special property : 

```
NaN == NaN; // false
 
NaN === NaN; // false

//But you do have a function to check the NaN value:  isNaN(expr) 

isNaN(NaN); // true
 
isNaN(0/0); // true
 
isNaN(12); // false
 
isNaN('foo'); // true
```

- shortened version with the conditional operator

```
var num = isNaN(num) ? 0 : num
```

## if else statement using switch

```
// it works only with explict variable but no with statement!!
var cloudColor = 'black';
switch(cloudColor) {
    case 'green': gear += 'spacesuit';
        break;
    case 'black': gear += 'boots, ';
    case 'grey': gear += 'umbrella, ';
    case 'white': gear += 'jacket, ';
    default: gear += 'watch';
}

var cloudColor = 'black';
switch(cloudColor) {
    case 'green': gear += 'spacesuit';
        break;
    case 'black': gear += 'boots, ';
    case 'grey': gear += 'umbrella, ';
    case 'white': gear += 'jacket, ';
    default: gear += 'watch';
}
```

## Loops 

```
var michel = {              // michel is an object
    familyName:'Buffa',     // familyName, givenName, age
                            // are its properties
    givenName: 'Michel',
    age: 51
}
 
for(var property in michel) {   // the for-in will
                                // enumerate properties
    console.log(property);      // will print "familyName",
                                // "givenName",
                                // "age"
    console.log(michel[property]);  // michel['givenName'] same 
                                    // as michel.givenName
}
```

# Callbacks and eventListener

Callbacks
Indeed, as functions are first-class objects, we can pass a function as an argument, as a parameter to another function and later execute that passed-in function or even return it to be executed later. When we do this, we talk about callback functions in JavaScript: a function passed to another function, and executed inside the function we called.

All the examples of event listeners that you've seen used callback functions. Here is another one that registers mouse click listeners on the window object (the window objects represent the whole HTML document):

```
window.addEventListener('click', processClick);

function processClick(event) {
  document.body.innerHTML += "Button clicked<br>";
}
```

Web browsers detect events as they occur, and may pass them to JavaScript code. They do this by allowing you to register functions as event listeners, also called handlers or callbacks for specific events.

Each time an event occurs, the browser puts it in a "queue of events".

```
addEventListener('click' function(evt){
  alert('Clicked')
})

window.onclick = function(evt){         // obj._action
  alert('Clicked')
}

<!-- on html -->
<button onclick='func()'>Button!<> // direct to html

<!-- identifying element -->
<button id='myButton'>hey</button>

<script>
  var b = document.getElementById('myButton')
  b.addEventListener('click', function(){alert('hey')})
</script>
```

## Events

- load event **onload=**

```
<body onload='init()'>
<!-- or -->
window.onload = init // preferibile
```

- load event **mousemove=**
```
var b = document.getElementById('button')
b.addEventListener('mousemove', function(evt){
  x_pos = evt.clientX
})
```

- size and resize **onresize**

```
window.onload = resize;
window.onresize = resize;

function resize(evt) {
  console.log("resize");
  var pageSizeSpan = document.querySelector('#pageSize');
  pageSizeSpan.innerHTML = "Width: " + window.innerWidth + " Height: " + window.innerHeight;
  
 // screen size
var screenSizeSpan = document.querySelector('#screenSize');
  screenSizeSpan.innerHTML = "Width: " + screen.width + " Height: " + screen.height;
  
}
```

### Keyboard events

When you listen to keyboard related events (**keydown, keyup **), the event parameter passed to the listener function will contain the code of the key that fired the event. Then it is possible to test which key has been pressed or released, like this:

```
window.addEventListener('keydown', function(event) {
   if (event.keyCode === 37) {
     //left arrow was pressed
   }
})

window.onkeyup = processKeyUp;
window.onkeydown = processKeyDown;m
```

### Mouse events

The example below is about listening to mouseup and mousedown events (when a user presses or releases any mouse button):

Event types related to mouse:
**mousedown, mouseup, click, dblclick, mousemove, mouseenter, mouseleave, mouseover, contextmenu**

- mouseleave: similar to mouseout, fired when the mouse leaves the surface of the element. The difference between mouseleave and mouseout is that mouseleave does not fire when the cursor moves over descendant elements, and mouseout is fired when the element the cursor moves to is outside the bounds of the original element or is a child of the original element.

- mouseover: the mouse cursor is moving over the element that listens to that event. A mouseover event occurs on an element when you are over it - coming from either its child OR parent element, but a mouseenter event only occurs when the mouse moves from the parent element to the child element.

- mousedown: fired when a mouse button is pressed.

- mouseup: fired when a mouse button is released.

- mouseclick: fired after a mousedown and a mouseup have occured.

- mousemove: fired while the mouse moves over the element. Each time the mouse moves, a new event is fired, unlike with mouseover or mouseenter, where only one event is fired.

MouseEvent properties:
**button, clientX, clientY, pageX, pageY, screenX, screenY**

```
canvas.addEventListener('mousedown', function (evt) {
   // do something with the mousedown event
});
 
canvas.addEventListener('mouseup', function (evt) {
   // do something with the mouseup event
});
```

## Form and inout field events

Event related to forms:

**input, change, focus, blur, select, submit**

-  onchange='func()'

types of input:

-   \<input type="text" 
         name="nom" 
         maxlength="32" 
         required
         oninput = "validateName(this)">

- \<input type="range" 
         min=1
         max=12
          step=0.1
         oninput = "doSomething(event)"> 

var val = evt.target.value;  

- \<input type="number" 
         min=1
         max=12
          step=0.1
         oninput = "doSomething(event)">

\<input type="color" 
         onchange = "changePageBackgroundColor(this.value);">

\ <input type="checkbox" name="fruit" value="apples">

// document.querySelectorAll("#fruits input:checked"); 


### Event Object

- type 

return the name of the event

- target

return the element that triggered the event (to access the value target.value)

# Dom API

Accessing HTML elements with the selector API (recommended)

Ah... these methods owe a lot to jQuery! They introduce a way to use CSS selectors (including CSS3 selectors) for requesting the DOM, like jQuery introduced ages ago.

Any CSS  selector can be passed as a parameter for these methods.

- While **querySelector(selector)** will return the first element in the DOM that matches the selector (and you will be able to work with it directly),

- **querySelectorAll(selector)** returns a collection of HTML elements corresponding to all elements matching the selector. To process the results, it will be necessary to loop over each of the elements in the collection.

```
// all elements li in ul elements in an element of id=nav
var el = document.querySelector('#nav ul li');

// all li in a ul, but only even elements
var els = document.querySelectorAll('ul li:nth-child(even)');

// all td directly in tr in a form of class test
var els = document.querySelectorAll('form.test > tr > td');

// all paragraphs of class warning or error
querySelectorAll("p.warning, p.error");

// first element of id=foo or id=bar
querySelector("#foo, #bar");

// first p in a div
var div = document.getElementById("bar");
var p = div.querySelector("p");
```

## Using the ClassList interface to change more than one CSS property simultaneously

```
// By default, start without a class in the div: <div class=""/>
// Set "foo" as the class by adding it to the classList
div.classList.add('foo'); // now <div class="foo"/>
// Check that the classList contains the class "foo"
div.classList.contains('foo'); // returns true
// Remove the class "foo" from the list
div.classList.remove('foo'); // now <div class=""/>
// Check if classList contains the class "foo"
div.classList.contains('foo'); // returns false: "foo" is gone
// Check if class contains the class "foo",
// If it does, "foo" is removed, if it doesn't, it's added
div.classList.toggle('foo'); // class set to <div class="foo"/>
div.classList.toggle('foo'); // class set to <div class=""/>
```

## parentNode

```
function displayListOfCheckedItems() {
  // all inputs that have been checked
  var listOfSelectedValues="";
  
  var list = document.querySelectorAll("#fruits input:checked");  
  list.forEach(function(elm) {
    listOfSelectedValues += elm.value + " ";
    
    // get the li parent of the current selected input
    var liParent = elm.parentNode;
    // add the CSS class .checked
    liParent.classList.add("checked");
  });
  document.body.append("You selected: " + listOfSelectedValues);
}

function reset() {
  var list = document.querySelectorAll("#fruits input");  
  list.forEach(function(elm) {
    // uncheck
    elm.checked = false;
    
    // remove CSS decoration
    var liParent = elm.parentNode;
    liParent.classList.remove("checked");
  });
}
```

## Adding new elements to the DOM

```
var li = document.createElement('li');
var img = document.createElement('img');


li.innerHTML = '<b>This is a new list item in bold!</b>'; // can add HTML in it
li.textContent = 'Another new list item';
li.style.color = 'green'; // green text
img.src = "https://..../myImage.jpg"; // url of the image
img.width = 200;

var ul = document.querySelector('#myList');
ul.append(li); // insert at the end, appendChild() could also be used (old)
ul.prepend(li); // insert at the beginning
ul.insertBefore(li, another_element_child_of_ul);// insert in the middle
document.body.append(img); // adds the image at the end of the document
```

## Moving HTML elements in the DOM

The append(), appendChild() methods normally adds  a new element to an existing one, as shown in this example:

var li = createElement('li');
ul.append(li); // adds the new li to the ul element

### Drag and drop functionality

In this example, when a user starts to drag an element, the drag() JavaScript function is called. In this function we use the drag'n'drop clipboard to store the id of the image that is being dragged.

When the image is dropped, the drop() method is called. As the drop event listener is declared on the two divs (on the left and the right), we just call append() on the target div element, and this will add the dragged image to the div, while removing it from its original location.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Drag and drop</title>
     <meta charset="utf-8">
  </head>
<body>
  <p id="text" ondragstart="drag(this, event)">Drag and drop browser images in a zone:</p><br/>
  <img src="https://mainline.i3s.unice.fr/mooc/ABiBCwZ.png" id="cr" 
       ondragstart="drag(this, event)" alt="Logo Chrome">
  <img src="https://mainline.i3s.unice.fr/mooc/n7xo93U.png" id="ff" 
       ondragstart="drag(this, event)" alt="Logo Firefox">

  <div class="box" ondragover="return false" ondrop="drop(this, event)">
    <p>Cool Web browsers</p>
  </div>
  
  <div class="box" ondragover="return false" ondrop="drop(this, event)">
    <p>Web browsers from the 90's</p>
  </div>
</body>
</html>

function drag(target, evt) {
    // When dragged, copy into the drag'n'drop clipboard
    // the id of the dragged elem (it's target.id)
    evt.dataTransfer.setData("browser", target.id);
  }

function drop(target, evt) {
    // get the id of the element being dragged
    var id = evt.dataTransfer.getData("browser");
  
    target.appendChild(document.getElementById(id));
      // prevent default behavior
      evt.preventDefault();
}

<!-- remove -->

```


## Comparing array

```
var persons = [
    {givenName: 'Michel', familyName: 'Buffa', age:51},
    {givenName: 'Pig', familyName: 'Bodine', age:20},
    {givenName: 'Pirate', familyName: 'Prentice', age:32}
];
 
function compareByAge(a,b) { // comparison function, a and b are persons
  if (a.age < b.age)         // compare by age
    return -1;
  if (a.age > b.age)
    return 1;
  return 0;
}
 
persons.sort(compareByAge); // this will call automatically compareByAge
                            // passing all persons from the array, compare
                            // them by age and sort the array.
```


# Classes

...

## 'new' keywords

Up to 2015, with JavaScript version 5 (and previous versions), you can define a pseudo-class template called "a constructor function". The syntax is the same as for creating a function, except that:

By convention, its name is Capitalized. The first letter of the function name is in uppercase, this is a good way to know, when you read someone else's code, that this is not a regular function, but a constructor function. Its name is a noun, the name of the class of objects you are going to build. Example: Person, Vehicle, Enemy, Product, Circle, Ball, Player, Hero, etc.
You build new objects using the new keyword: 

Examples (Car, Hero, Ball, Product are constructor function names):

```
var car = new Car('Ferrari', 'red');
var luke = new Hero('Luke Skywalker', 'rebels");
var ball1 = new Ball(10, 10, 20, 'blue'); // x=10, y=10, radius = 20, color = 'blue'
var p1 = new Product('Epson printer P1232', '183', 'Mr Buffa'); // ref, price, customer
etc.
```

The parameters of the function are the "constructor parameters": the new object that you are building will take these as its initial properties' values. You can build a Hero, but you must give him/her a name, a side, etc.
You define the property names and method names using the this keyword. But beware: the syntax is not the same as the syntax we used for singleton/simple objects. No more ":" and "," between properties. Here we use "=" and ";" like in regular functions.


```
function Hero(name, side) {
    this.name = name;
    this.side = side;
    this.speak = function() {
        console.log("My name is " + this.name + " and I'm with the " + this.side);
    }
}
```

In a constructor function named "Hero", you will find properties declared like this: this.name this.side; and methods declared like this: this.speak = function() {...}
Very often some properties are initialized using the constructor function parameters, so that the newly constructed objects will get an initial value for their properties. In this case, we use the this keyword to distinguish the property from the constructor function parameter:


# Class New Way

```
class Hero{
  constructor(name,side){
    this.name = name
    this.side = side
  }

  speak(){
    return 'hi no 'function before the function!'
  }

}
```
 style="cursor: pointer;">

 # Pre-Defined method of classes

 - Object.toString() // usefull for string since you cannot prince an array.

 - Object.toValueOf()

 - var a = new Array()
 - a.length()
 - a.push()
 - a.pop()
 - a.sort()
 - a.join(' ')
 - a.slice(index, numberToRemove) // do no modify the original list
 - a.splice(index, numerToRemove, arg_to_add**)

 - Number()
 - Object.toFixed(2) // two decimal
 - Object.ToString() // return a string

- var b = new String()
- b.length()
- b\[0]
- b.toUpperCase()
- b.toLowerCase()
- b.indexOf('b', starting_index) //  returns the index of the string value passed as parameter, -1 if the string value is not found in the original string.
- b.charAt('m') //returns the char at the index passed as parameter. Returns an empty string if the index is out of bounds (less than 0 or greater than the length of the string).
b.slice(start, stop) If stop is omitted: extracts characters to the end of the string
s.split(' ')

- Math()

- Math.round(Math.random());
- Math.min(n1, n2)
- Math.max(n1,n2)

- Date()
- var date = new Date()
- var arbitraryDate = new Date(2017, 3, 16, 14, 43, 10, 120);
- date.getMonth()
- date.getDay()

- JSON.stringify(obj)
- JSON.parse('string')


# HTML Table JavaScript API

```
var table = document.getElementById("myTable");
var table = document.querySelector("#myTable");
 
var table = document.createElement("table"); // creates a new table

var row = table.insertRow()
table.deleteRow(idx)
table.createCaption()
table.createTHead()

table.deleteCaption,THead .. 

row.cells()
row.rowIndex()
row.insertCell('value')
row.deleteCell()
```

# HTML Form 

-For every form field, ensure that a descriptive label is provided and use the \<label> element to identify each form control.
For larger or complex forms, use the \<fieldset> and \<legend> elements to respectively group and associate related form controls.

**colors, date, email, tel, url, search, number, range**

```
<form action='serverComponent.php' method='POST'>
  <fieldset>

    <legend>Personal informations</legend>
    
    <label for="givenName">Given name:</label>
    <input type="text" id="givenName" required name="givenName">
    
    <br>
    
    <label for="familyName">Family name:</label>
    <input type="text" id="familyName" required name="familyName">
    
    <br>

    <label for="bdaymonth">Birthday (month and year):</label>
    <input type="month" id="bdaymonth" name="bdaymonth">

    <label for="email">Email:</label>
    <input type="email" id="email" required name="email">
    
    <br>
    <label for="age">Age:</label>
    <input type="number" min=0 max=120  step=5 id="age" required name="age">
 
    <br>
    <label for="date">Birth date:</label>
    <input type="date"  id="date" required name="date"      value="2015-06-20"
     min="2015-06-20"
     max="2015-06-30">
  
    <label for="range">Range</label>
    <input type="range"  id="range" required name="range" oninput='myFunc(event)'>
    <output id='sizeValue>10</output>

    function myFunc(event){
      size = Number(event.target.value)
    }
    
    <legend>Choose option</legend>
    <label for="free">Free registering</label>
    <input type="checkbox" id="free"/>
  
    <button type="submit">Send form</button>
  </fieldset>
</form>

input:invalid{
  background-color = 'red'
}

<input type="date"
    id="birthdayParty"
    list="birthdayPartyPossibleDates"
    value="2015-06-20">
<datalist id="birthdayPartyPossibleDates">
     <option label="Best for me">2015-06-20</option>
     <option label="Ok for me too ">2015-06-27</option>
     <option label="This one is a sunday, hmmm">2015-06-28</option>
</datalist>
```

attributes of forms:
- form
- readonly
- autocomplete
- **autofocus**
- **list**
- pattern
- required*
- placeholder
- multiple
- list
- min
- max
- step
- formaction
- formenctype
- formmethod
- formtarget
- formnovalidate

```
<form>
    ...
    <input list="browsers" id="mybrowser" />
    <datalist id="browsers">
       <option value="Internet Explorer">
       <option value="Firefox">
       <option value="Chrome">
       <option value="Opera">
       <option value="Safari">
    </datalist>
...
</form>
```

```
<input id="mydate" name="mydate"
       type="date"
       min="2012-01-01"
       max="2013-01-01"
       value="2012-01-01"
/>
 
<input name="time" id="time" type="time"
        min="09:00"
        max="17:00"
        value="12:00"
/>
 
<input id="range" name="range" type="range" min="0" max="100" step="5"/>
```

**\<input type="email" name="myemail" multiple>**


```
<form action="defaultAction.php">
  <label for="givenName">Given name:</label> <input type="text" name="givenName" id="givenName"><br>
  <label for="familyName">Family name:</label> <input type="text" name="familyName" id="familyName"><br>
  <input type="submit" value="Submit"><br>
  <input type="submit" formaction="otherAction.php" value="Submit to another URL than default">
```

```
Download progress: <progress id=pr value=100 min=0 max=1000></progress>
<script>
   var i=0;
   setInterval(function () {
       i = (i+1) %1000;
       document.getElementById('pr').value = i;
   },1);
</script>
```
# Consuming Remote Data with fetch(), AJAX requests!

The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network. You fetch data from a URL, then, you do something with the response, then you do something else. If there is an error you can catch this error and display, for example, an error message. 

See this blog post for a detailed tutorial. Asynchronous JavaScript and JavaScript promises (the fetch...then...then... is based on the concept of "promises") is not detailed in this course.
 
 - https://javascript.info/fetch-api

 - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

```
function search(query) {
    var queryURL = query;
    fetch(queryURL)
      .then(function(response) {
          // response is a json string,
          // convert it to a pure JavaScript object
          return response.json();
      })
      .then(function(users) {
          // users is a JavaScript object here
          console.log(users)
      })
      .catch(function(error) {
          console.log('Error during fetch: ' + error.message);
      })};

/////
var progress = document.querySelector('#downloadProgress');
 
function downloadSoundFile(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
 
  ...
  xhr.onprogress = function(e) {
    progress.value = e.loaded;
    progress.max = e.total;
  }
  xhr.send();
}

/////////
<body>
  <progress id='downloadProgress' value='0'></progress>
  <button onclick='downloadSoundFile()'>Button
  </button>


var progress = document.querySelector('#downloadProgress');

function downloadSoundFile(url) {
    var xhr = new XMLHttpRequest();
    var url =  "https://dati.trentino.it/dataset/f76af483-5e62-43ad-92c5-3bcea666edb0/resource/60417352-817e-4cd8-af5b-cdf2f6f9f3ee/download/elenco-aderenti-euregio-family-pass.json"
    xhr.open('GET', url, true);
 
    xhr.responseType = 'json'; // THIS IS NEW WITH HTML5!
    xhr.onload = function(e) {
       console.log("Song downloaded, decoding...");
       console.log(this.response[0]); // this.response is an ArrayBuffer.
    };
    xhr.onerror = function(e) {
      console.log("error downloading file");
    }

    xhr.onprogress = function(e) {
    progress.value = e.loaded;
    progress.max = e.total;
    console.log('here')
    
  }
   
      
    xhr.send();
       console.log("Ajax request sent... wait until it downloads completely");
  }
```

## Geolocation API

```
<html>
<head>
  <meta charset="utf-8">
  <title>OpenStreetMap Example</title>
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css">
  <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>
</head>
<body>
  <button class="btn" onclick="getLocation(event)">Click to show your location with OpenStreetMap</button>
  <div id="map" class="map"></div>
</body>
</html>

function getLocation(e) {
  e.preventDefault();
  if (!navigator.geolocation) {
    alert("Browser doesn't support geolocation");
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}
 
// Get current position successfully
function success(position) {
  var map, marker,
  latitude = position.coords.latitude,
  longitude = position.coords.longitude;
  // Instance map using leaflet
  map = L.map('map').setView([latitude, longitude], 13);
  // Tile layer using key api at cloudmade.com
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    key: '760506895e284217a7442ce2efe97797',
    styleId: 103288,
    maxZoom: 16
  }).addTo(map);
 
  // Marker using leaflet
  marker = L.marker([latitude, longitude]).addTo(map);
 
  // Popup in leaflet
  marker.bindPopup('<p>Your location</p>').openPopup();
}
 
// Get current position fail
function error() {
  alert('Get current position fail. Please access codepen to get geolocation.');
}
```

## d3.js

we can render basic visual elements in html using scalable vector graphics (SVG). 

```
<head><script> d3 blah blah </script></head>
<svg>  
  <circle />
</svg>


//
var circle = {x:50, y:30, r:40, fill:'yellow'}
var svg_container = d3.select('svg')
svg.select('circle')
  .attr('cx', circle.x)
  .attr('cy', circle.y)
  .attr('r', circle.y)
  .style('fill', function(){
    if (circle.r < 50) return 'yellow';
    else return 'red';
  })

```

Bar chart example 

```
<svg class='chart' height='200'></svg>

var datas = [40,140,75,170]

function pressButton(){
  datas.push(document.getElementById('text').value)
}

function insert(){
svg_container = d3.select('svg')
var selection = svg.selectAll('g')
 .data(datas)
 .enter()
 .append('g')
 .attr('transform', function (d,i){
   return 'translate(' + 40*i + ',' + (200-d) +')' )
 })
 }

 selection.append('rect').attr('width',39).attr('height', function(d,i){return d})

```

With objects:

```



  var values = [ {price: 700, sqft: 3000, br: 3, pets: [ 'cats', 'dogs' ] },
                 {price: 445, sqft: 1700, br: 2, pets: [] },
                 {price: 421, sqft: 1455, br: 2, pets: [ 'cats', 'dogs' ] },
                 {price: 411, sqft: 1314, br: 2, pets: [ 'dogs' ] },
                 {price: 275, sqft: 1200, br: 1, pets: [ 'cats' ]},
                 {price: 500, sqft: 650, br: 1, pets: [] },
  
               ];


  var svg = d3.select("svg");
  
  var selection = svg.selectAll("g")
    .data(values)
    .enter()
    .append("g")
    .attr("transform", "translate(10,10)");

  selection.append("circle")
    .attr("cx", (d,i) => { return d.price/2; })
    .attr("cy", (d,i) => { return (4000 -  d.sqft)/(4000/400) ; })
    .attr("r", (d,i) => { return d.br * 10 ; })
    .style("fill", (d,i) => {return color(d.pets);})
    .style("opacity", "0.5")
    .append("svg:title").text( (d,i) => { return print(d); });


    var width = 400;
    var height = 400;
    
    var xScale = d3.scaleLinear()
    .domain([0, width*2])
    .range([0, width]);
    var xAxis = d3.axisBottom(xScale);
    svg.append("g").attr("transform", "translate(10,410)").call(xAxis);

    var yScale = d3.scaleLinear()
    .range([height,0])
    .domain([0, 4000]); 

    var yAxis = d3.axisRight(yScale);
    svg.append("g").attr("transform", "translate(10, 10)").call(yAxis);


  function print(home) {
     return `$${home.price}k, ${home.sqft}sqft, ${home.br} BRs`;
  }

  function color(pets) {
    var dogs = pets.indexOf('dogs') != -1;
    var cats = pets.indexOf('cats') != -1;

    if (dogs) return cats ? 'purple' : 'blue' ;
    return cats ? 'red' : 'gray';
  }




```