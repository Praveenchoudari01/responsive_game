
const secretNumber = Math.ceil(Math.random()*100);

const maximumAttempts = 5;
let Attempts = 0;

 


document.getElementById("submit").onclick=function gameLoop()
{  
    const guessNumber = document.getElementById("number_input").value;
    const parsedNumber = parseInt(guessNumber);

 if(isNaN(parsedNumber))
 {
    document.getElementById("msg").innerHTML="please enter a valid number";
    gameLoop();
 }
    else if(parsedNumber<secretNumber)
    {
        document.getElementById("msg").innerHTML="Too low..try again!!";
        Attempts++;
        if(Attempts<maximumAttempts){
            call(gameLoop());
        }
        else{
            document.getElementById("msg").innerHTML="please restart game again !!!";
        }
    }
    else if(parsedNumber>secretNumber)
    {
        document.getElementById("msg").innerHTML="Too high...try again!!";
        Attempts++;
        if(Attempts<maximumAttempts)
        {
            call(gameLoop());
        }
        else{
            document.getElementById("msg").innerHTML="please restart game again !!!";
        }
        
        
    }
    else
    {
        document.getElementById("msg").innerHTML="Congrats your guess was correct"+" "+".   The secret number is"+" "+secretNumber;
    }
    
    if(Attempts==maximumAttempts){
        alert("Sorry! You have reached your limit "+" "+"Secret number  is "+" "+secretNumber);
    }
}

gameLoop();






