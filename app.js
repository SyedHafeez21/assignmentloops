//Q1 
// Declare an empty array using JS literal notation to store
// student names in future.

// var car = []

// Q2
// Declare an empty array using JS object notation to store
// student names in future

// var car = [{}]


// Q3
// var car;
// car =  ["honda", "suzuki" , "kia"]


// Q4
// var num = [1,2,4,7,9]

// Q5
// var abc = [true , false ]

// Q6
// var mixed = ["hinda",2,true]

// Q7

// var Qualification = ["SSC", "HSC", "BCS", 
//     "BS", "BCOM", "MS", "M. Phil", "PhD"]

//     document.write("Qualication")
//     document.write("<br/>")
//     for(let i = 0; i < 8; i++){

//         document.write(Qualification[i]);
//         document.write("<br/>")
//       }


// Q8

// var names =["michael", "john", "Tony"]
// var scores = [320, 230, 480]


// for(let i = 0; i < 3; i++) {
//     document.write("Score of" + " " + names[i] + " " + "is" + " " + scores[i] + " " + "Percentage is " + " " + (scores[i]/500)*100 + "%" )
//     document.write("<br/>")

// }


//Q10
// var num = [90,80,50,40,10]
// num.sort()
// document.write(num)


//Q11
// var cityName = ["karachi", "lahore", "Peshawar", "islamabad"]

// document.write("City List")
// document.write("<br/>")
// for(let i = 0; i < 4; i++){
    
//     document.write(cityName[i]);
//     document.write("<br/>")
// }
// document.write("<br/>")
// document.write("Selected City List")
// document.write("<br/>")
// document.write( cityName.slice(1,3) )


// Q12
// var arr = ["this" , "is" , "a" , "boy"]
// document.write(arr.join())

// Q13

// var num = ["keyboard", "mouse", "printer", "monitor"];
// for(let i = 0; i < 4 ; i++ ){
//     document.write("Out:")
//     document.write("<br/>")
//     document.write(num[i])
//     document.write("<br/>")
// }


// Q14

// var num = ["keyboard", "mouse", "printer", "monitor"];
// num.reverse()
// for(let i = 0; i < 4 ; i++ ){
//     document.write("Out:")
//     document.write("<br/>")
//     document.write(num[i])
//     document.write("<br/>")
// }


// Q15 
// Apple,
// Samsung, Motorola, Nokia, Sony & Haier

// var mob = ["apple" , " samsung" , "nokia" , "sony" , "haier"]
// document.write (mob)











// CHAPTER 2 ARRAY AND LOOPS
// Q1
// var names = [
//     [],
//     [],
//     []
// ]

// Q2
// let names = [
//     ["0","1","2","3"],
//     ["1","0","1","2"],
//     ["2","1","0","1"]
// ];

// document.write(names[0][0]);
// document.write(names[0][1]);
// document.write(names[0][2]);
// document.write(names[0][3]);

// document.write("<br/>")

// document.write(names[1][0]);
// document.write(names[1][1]);
// document.write(names[1][2]);
// document.write(names[1][3]);

// document.write("<br/>")

// document.write(names[2][0]);
// document.write(names[2][1]);
// document.write(names[2][2]);
// document.write(names[2][3]);



// Q3

// for(var i = 1; i <= 10; i++) {
//     document.write(i);
//     document.write("<br/>")
    
// }


// Q4

// var userinput = prompt("Enter Table Value: ")
// var length = prompt("Enter Table Length: ")

// for(var i = 1; i <= length; i++) {

//     document.write(userinput + " " +  "x" + " " + i + " " + "="  + " " + userinput*i)
//     document.write("<br/>")

    
// }



// Q5


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
    

// for(var i = 0; i < 5; i++) {
//          document.write(fruits[i])
         
//          document.write("<br/>")
         
// }


// for(var i = 0; i < 5; i++) {
    
// document.write("Element at index" +  "  "  + i  +  " " +fruits[i])
// document.write("<br/>")    
// }


//Q8

// var num = [24, 53, 78, 91, 12]
// var largest = Math.max(...num)
// document.write(largest)

// Q9
// var num = [2,5,3,7,3, 4,];
// var small = Math.min(...num)
// document.write(small);




// Q10
// for(var i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(i)
//         document.write("<br/>")    
//     }
// }
