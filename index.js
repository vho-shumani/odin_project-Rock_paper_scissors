function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3 + 1);
    if (choice == 1)
    {
        return 'rock';
    }
    else if (choice == 2)
    {
        return 'paper';
    }
    else if (choice == 3)
    {
        return 'scissors';
    }
}
function playRound(playerSelection, computerSelection)
{
    if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock'))
    {
        if (playerSelection == 'rock' && computerSelection == 'paper')
        {
            return `You Lose! ${computerSelection} beat ${playerSelection}`; 
        }
        else
        {
            return `You Win! ${playerSelection} beat ${computerSelection}`; 
        }
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'rock'))
    {
        if (playerSelection == 'rock' && computerSelection == 'scissors')
        {
            return `You Win! ${playerSelection} beat ${computerSelection}`; 
        }
        else
        {
            return `You Lose! ${computerSelection} beat ${playerSelection}`; 
        }
    }
    else if ((playerSelection == 'paper' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper'))
    {
        if (playerSelection == 'paper' && computerSelection == 'scissors')
        {
            return `You Lose! ${computerSelection} beat ${playerSelection}`; 
        }
        else
        {
            return `You Win! ${playerSelection} beat ${computerSelection}`; 
        }
    }
    else
    {
        return `Its Tie: ${playerSelection} and ${computerSelection}`;
    }
}
function playGame(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++)
    {
        const playerSelection = prompt('Please Enter choice: ').toLowerCase();
        const computerSelection = getComputerChoice();
        let results;
        if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors')
        {
            results = playRound(playerSelection,computerSelection);
            console.log(results);
            if (results.includes('Win!'))
            {
                playerScore++;
            }
            if (results.includes('Lose!'))
            {
                computerScore++;
            }
        }
        else
        {
            alert("Can only select: Paper, Rock or Scissors.");
            i--;
        }
    }
    console.log(`Player: ${playerScore} pts \ncomputer: ${computerScore} pts \nTies: ${Math.abs(computerScore + playerScore - 5)}`);
    if (playerScore > computerScore)
        console.log('You win!!!');
    else if (playerScore < computerScore)
        console.log('You lost.');
    else
        console.log('It is a Tie.');
}
playGame()