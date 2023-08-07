//a function to play CRAPS on my index.html page
function playCraps(){ console.log("playCraps() started");
    //step 1: roll two 6-sided dice
var die1;
var die2;
die1 = Math.ceil(6 * Math.random()); 
die2 = Math.ceil(6 * Math.random());
console.log("die1 is:" + die1);
console.log("die2 is:" + die2);

    //step 1b print results on screen
document.getElementById("die1Res").innerHTML = die1;
document.getElementById("die2Res").innerHTML = die2;

    //step 2:  calculate the sum of die 1 and die 2
var diceSum = die1 + die2;
console.log("The sum of the dice is:" + diceSum);
document.getElementById("diceSum").innerHTML = diceSum;

/*
if (conditions for true) {do this if conditions are true}
else if (another conditions for true) {do this else if conditions are true}
else {do this if none are true}
*/


    //step 3:  does the sum equal "7" or "11", meaning LOSE
if(diceSum==7||diceSum==11)
{document.getElementById("gameRes").innerHTML = "!! LOSE !!";}
else if (die1 == die2 && die1%2 == 0)
{
//else if (diceSum==11){document.getElementById("gameRes").innerHTML = "NOT A WINNER";}

    //step 4:  do dice equal doubles, are they even, meaning WIN
    document.getElementById("gameRes").innerHTML = "!! WIN  !!";
}


    //step 5:  if no, PUSH (neither WIN nor LOSE)
else{document.getElementById("gameRes").innerHTML = " TRY AGAIN? ";

}

}


//checkCreds function for string.html

function checkCreds()
{
    console.log("checkCreds()  started...");
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;

    //this places the characters under the fName id in the firstName variable
    firstName = document.getElementById("fName").value;
    console.log("The first name is inputted as " + firstName);

    lastName = document.getElementById("lName").value;
    console.log("The last name is inputted as " + lastName);

    zipCode = document.getElementById("zipCode").value;
    console.log("The zip code is inputted as " + zipCode);

    fullName = firstName + " " + lastName;
    console.log("The full name is " + fullName);

    fullNameLength = fullName.length;
    console.log("The full name has " + fullNameLength + " characters");

    zipCodeNumb = parseInt(zipCode);
    console.log("The zip code number is " + zipCodeNumb);

    if  (fullNameLength > 20)
    
    {document.getElementById("loginStatus").innerHTML = "Invalid name, try again"}
    
    else if(zipCode.length != 5 || zipCodeNumb > 99999 || zipCodeNumb < 0)
    {document.getElementById("loginStatus").innerHTML = "Invalid zip code, try again"}

    else{alert("User credientals correct, welcome " + fullName);}

}

function startFun(){
    console.log("startFun()started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("mymarquee").start();
}

function stopFun(){
    console.log("stopFun()started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    document.getElementById("mymarquee").stop();
}

    //this function is a fun one! I created a prompt to type an word user decides, 
        //the function will check the string and compare it to the reverse of itself
        //if they are identical, the text will result in "Is A Pallindrome" or "Is Not A Pallindrome" if the string is not
function checkPalin()
{
    //check for a palindrome
    console.log("checkPalin() started");
    
    //extract the text to a string variable called entStr
            //(enteredString)
    var entStr;
    entStr = document.getElementById("palinInput").value;
    console.log("The Text Entered is: " + entStr);
    
    //remove the spaces from the text
    var entStrNoSpace = entStr.split(" ").join("")
    console.log("no spaces = " + entStrNoSpace);

    //create a new variable called "revStr" 
            //(reverseString)
    //and store the entered string reversed here
    var revStr;
    const revArray = [];
    
    length = entStrNoSpace.length - 1;
    console.log("string length = " + length);
    
    for(let i = length; i >=0; i--)
    {revArray.push(entStrNoSpace[i]);}
    
    revStr = revArray.join("");
    console.log("reversed is: " + revStr);

    //compare entString to revString
    var equal = 0;
    equal = (entStrNoSpace === revStr);
    console.log(equal);
    
    //give notice of equality status
    if(equal == true)
    {document.getElementById("palinStatus").innerHTML = entStr + " <h3>Confirmed</h3> As Palindrome"
    }
    else
    {document.getElementById("palinStatus").innerHTML = entStr + " <h3>Not</h3> A Palindrome"
    }
}
    //creating a function that plays a song/sound when a button is pressed
    function playCreepyJack(){
        console.log("CreepyJack() started");
        mySound = new sound("CreepyJack.mp3");
        mySound.play();
    }
   function playWilhelm(){
        console.log("playWilhelm() started");
        mySound = new sound("Wilhelm.wav");
        mySound.play();
    }

    function sound(srcFile){
        this.sound = document.createElement("audio");
        this.sound.src = srcFile;
        this.sound.setAttribute("preload", "audio");
        this.sound.setAttribute("controls", "none");
        document.body.appendChild(this.sound);
        this.play = function(){
            this.sound.play()
        }
        this.stop = function(){
            this.sound.pause;
        }
    }
    //creating a funtion for a running timer
    function setTime(){
        console.log("setTime() started");
        //1. Extract the number in the form
        var numOfSec;
        numOfSec = document.getElementById("timeInput").value;
        //2. Use this number to create timers
       
        /*setTimout(function(){
            //whatever we want to do
           / document.getElementById("statusUpdate").innerHTML = "I have waited 5 seconds";
        }, 5000);*/

        //Time for a loop
        var currTime = numOfSec;
        for(var i = 0; i <= numOfSec; i++){
            if(i == numOfSec){
                setTimeout(function(){
                    document.getElementById("statusUpdate").innerHTML = "All around the mullburry bush...";
                    currTime--; // "--"" is the same as "- 1"
                },i * 1000);
            } else {
                setTimeout(function(){
                    document.getElementById("statusUpdate").innerHTML = currTime;
                    currTime--; // "--"" is the same as "- 1"
                },i * 1000);
            }
        }
        //3.Use this number to play music after number of seconds
        setTimeout(function(){
                playCreepyJack();
        }, numOfSec * 1000);
 }
 