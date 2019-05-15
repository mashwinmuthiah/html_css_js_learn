/* This is a comment */

//declaration of variables
var a;
var b = 2;
a = 4;
b = a;
console.log(a,b);

var ASHWIN;
ashwin = 10;
console.log(ASHWIN,ashwin);

//arithmetic operation numbers
var sum = 10+5;
console.log(sum);
var deff = 10-5;
console.log(deff);
var myvar = 5;
myvar++
console.log(myvar);

//float point numbers
var mydec = 5.544545544
console.log(mydec);

//plus equals operatior
a += 12;
 console.log(a);
 a-= 5;
 console.log(a);

 //variables 
 var mystring = "This is a javascript string";
 console.log(mystring); 

var mystr = "This is a \"double quoted \" string inside a string";
console.log(mystr); 
mystr = 'This is "double quotes " string';
console.log(mystr);4

/*
Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	backspace
\f	form feed
*/

 var myvar2 = "ashwin\n\fmuthiah\nmurugappan"
 console.log(myvar2);

 //concatenation of strings

 var mystr = "This is the start " + "This is the end";
 console.log(mystr);
 var outstr = "I come first ";
 outstr += "I come last"
 console.log(outstr); 

 var fname = "ashwin";
 var lname = "murugappan";
 console.log("my first name is "+fname+" and my last name is "+lname);

 console.log(fname.length);

 firstLetter = fname[0];

 console.log(firstLetter) // first letter
 console.log(fname[fname.length-1]); //last letter

 //function
function adding(one,two,three,four) {
    var result;
    result = one+two+three+four;
    return result;
}
console.log(adding("Ashwin ","Muthiah ","Murugappan ","Northeastern "));

//Array
var ar1 = ["Ashwin","Muthiah"];
console.log(ar1);

var ar2 = [["as","hw"],["in","mu"]];
console.log(ar2);

var myarr = ['a','b','c','d','e','f'];
var mydata = myarr[2];
console.log(mydata);
// arrays are mutables by indexs
myarr[2] = 'Z';
console.log(myarr);

console.log(ar2[0][0]);

//appending - Push
myarr.push(['b','b','b','b'])
console.log(myarr);

// Scope - local and global 
var globals = 5;

function myfun(){
    if (globals == 5){
        console.log("globals is defined"); 
    }
}

function myfun2(){
    q = 5;
}
myfun();

// console.log(q); - will shoutout an error as q is not global.

// If statements

var value = false;
function trueorfalse(value){
    if(value){
        console.log("The valse is True");
    }
    else{
        console.log("The value is False");
    }
}

trueorfalse(value)

function testequality(val) {
    if (val == 12){
        return "Equal";
    }
    else{
        return "Not equal";
    }
}
console.log(testequality(12));

//objects 

var myobject = {
    "first_name":"Ashwin",
    "last_name":"Muthiah",
};

myobject.first_name = "Ashwin Muthiah";
myobject.last_name = "Murugappan";

myobject["university"] = "Northeastern";

console.log(myobject.first_name);

myobject["school"] = "SBOA";
console.log(myobject);

delete myobject.school; // Delete a property
console.log(myobject);

//check for property in objects  - hadOwnProperty

function checkprop(p_name){
    if(myobject.hasOwnProperty(p_name)){
        console.log(myobject[p_name]);
    }
    else{
        console.log("Property Doesn't Exist");
    }
}

checkprop("first_name");
checkprop("dsfgsfg");

// Iteration with loops

//While
myarr = [];
i = 0;
while(i<5){
    myarr.push(i);
    i++;
}
console.log(myarr);

//for loop

myarr = [];
n = 6;
for (i = 0;i<n;i++){
    myarr.push(i)
}

console.log(myarr);
//printing even numbers

a = []
for (i = 0;i<n;i+=2){
    a.push(i);
}

// going through the array

myarr = [10,12,14,16,18,20];
var s = 0;
for(i = 0;i<myarr.length;i++){
    s = s+myarr[i];
}

console.log(s);

console.log(Math.random()); // random decimal 
console.log(Math.floor(Math.random() * 20));
console.log(Math.floor(Math.random()*9));

//Type convertion

console.log(parseInt("12324",10));

//Ternary operator

a = 1234;
b = 1234;

console.log(a+1 === b+1 ? "same" : "Not same");

console.log(a+1 === b+1 ? "Same" : a<b ? "A is Smaller" : "B is smaller");

// filter and map 

const realNumberArray = [4,5.6,-5,5.3,3,2,5.5];
const squareList = (arr) => {
    const squatedInteger = arr.filter(num => Number.isInteger(num)&& num>0).map(x => x*x);
    console.log(squatedInteger);
}

squareList(realNumberArray);

//Copy array
arr1 = [1,2,3,4,5,6,7,8,9];
arr2 = [...arr1];
arr1[0] = "Ashwin";
console.log(arr1,arr2);

//Destructuring assignment - objects

myobject = {
    "today":{"min":40,"max":90},
    "tomorrow":{"min":50,"max":95}
};

const {tomorrow:{min:may13th}} = myobject;

console.log(may13th);

//Remove first 2 elements

const souce = [1,2,3,4,5,6,7,8,9];
var list;
const [,,...x] = souce;
console.log(x);

// Destructuring assignmny when passing argument
var myarra = {
    'f_name' : 'ashwin',
    'l_name' : 'muthiah',
    'phone' : 1234567898,
    'email' : "whatever@SpeechGrammarList.com"
}

console.log(myarra);

function myfun3({f_name,l_name}){
    return f_name + l_name;
}
console.log(myfun3(myarra));

//Template literals 

console.log(`Hi !! my name is ${myarra.f_name} and my number is ${myarra.phone}`);

// Creating a method
var got = {
    'a':1,
    'b':2,
    'c':3,
    'sum': function(a,b){
        return a+b;
    }
};

console.log(got.sum(5,4));