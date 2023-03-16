alert('Welcome to Rock, paper, scissor game')
let again;

do {
    let userChoice = prompt('Rock(0), paper(1) or scissor(2) choice any one:');
    let computerNumber = Math.round(Math.random() * 3);
if(computerNumber == 0){
    computerChoice = 'rock';
} else if(computerNumber == 1){
    computerChoice = 'paper';
} else if (computerNumber == 2){
    computerChoice = 'scissors'
}

    console.log(`${userChoice}`);
    console.log(`${computerChoice}`);
    if( (userChoice=='rock'&& computerChoice== 'scissors')
        ||(userChoice=='paper'&& computerChoice== 'rock')
        ||(userChoice=='scissors'&& computerChoice== 'paper') ) 
    {
    alert(`You are the winner!`);
    } else if( (userChoice=='rock'&& computerChoice== 'paper')
         ||(userChoice=='paper'&& computerChoice== 'scissors')
         ||(userChoice=='scissors'&& computerChoice== 'rock') ) 
    {
    alert(`Sorry you lose the game. Computer win the game!`);
    } else if( (userChoice=='rock'&& computerChoice== 'rock')
           ||(userChoice=='paper'&& computerChoice== 'paper')
           ||(userChoice=='scissosr'&& computerChoice== 'scissors') )
    {
    alert(`Match is tie!`);
    }  else if ((userChoice != 'rock') || (userChoice != 'paper') || (userChoice != 'scissors'))
    {
        alert(`Enter correct option among rock, paper or scirrors`);
    } 
    again = prompt('Play again? (y/n)')
} while(again === 'y');
      alert('Game over!');
