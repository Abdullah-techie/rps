console.log("good morning!");
 const arr = Math.floor(Math.random()*3)

 let choice = 0
function getcomputerchoice(choice){
    if(arr === 0){
        choice = "rock"
    }
    else if(arr === 1){
        choice = "scissors"
    }
    else {
        choice = "paper"
    };

    return choice
}
console.log(getcomputerchoice(choice));
  let playerinput = prompt("","enter your input")
 function gethumanchoice(){
    return playerinput
 }
 console.log(gethumanchoice());
 let humanscore = 0
 let computerscore =0
 function playGame(){
 function Playround(humanchoice,computerchoice){
    
    if(humanchoice.toLowerCase() === computerchoice){
     return
        ("you tied,give another trial")

    }
    else if (humanchoice.toLowerCase() === "rock" && computerchoice === "scissors" ){
        humanscore++
        return("rock beats scissors"); 
        
    }
    else if (humanchoice.toLowerCase() === "scissors" && computerchoice === "paper"  ){
        humanscore++
        return("scissors beats paper");}
    else if (humanchoice.toLowerCase()==="paper"&& computerchoice === "rock"){
        humanscore++
            return ("paper beats rock")
        }
    else {
        computerscore++
        return("you lose!.try again")
    }      
   
 }
let humanchoice = gethumanchoice()
let computerchoice = getcomputerchoice()
 console.log (Playround(humanchoice,computerchoice))
 
 let humanscore = 0
 let computerscore =0
 for(let i = 0;i < 5;i++) {
    Playround();
 }      
  
 }
