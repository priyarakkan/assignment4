
   let again;
do {
    let userChoice = prompt('Rock(0), paper(1) or scissor(2) choice any one:');
    let computerChoice = Math.round(Math.random() * 3);
    console.log(`${userChoice}`);
    console.log(`${computerChoice}`);
    if( (userChoice=='rock'&& computerChoice==2)
        ||(userChoice=='paper'&& computerChoice==0)
        ||(userChoice=='scissor'&& computerChoice==1) ) 
    {
    alert(`You are the winner!`);
    } else if( (userChoice=='rock'&& computerChoice==1)
         ||(userChoice=='paper'&& computerChoice==2)
         ||(userChoice=='scissor'&& computerChoice==0) ) 
    {
    alert(`Sorry you lose the game. Computer win the game!`);
    } else if( (userChoice=='rock'&& computerChoice==0)
           ||(userChoice=='paper'&& computerChoice==1)
           ||(userChoice=='scissor'&& computerChoice==2) )
    {
    alert(`Match is tie!`);
    }  else if ((userChoice != 'rock') || (userChoice != 'paper') || (userChoice != 'scissor'))
    {
        alert(`Enter correct option among rock, paper or scirror`);
    } 
} while(again === 'y')
      alert('Game over!')
