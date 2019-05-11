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