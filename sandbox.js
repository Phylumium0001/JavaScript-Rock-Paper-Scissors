console.log("Welcome to Rock Paper Scissors!!!");
choice = ['R', 'P', 'S']
let tries = prompt("How many games do you want to play: ")
let i =1;
let userWins = 0;
let compWins = 0;

while (i <= tries){
    // Take response from user
    let userResponse = prompt("Choose your weapon: Rock(R) Paper(P) Scissors(S)").toUpperCase();
    console.log(userResponse)

    // Generate a random value from options
    let randNum = Math.floor(Math.random(0) * 3);
    let compResponse = choice[randNum];
    console.log(compResponse);

    // Compare results
    // Draw
    if (userResponse == compResponse){
        console.log('Draw')
    }

    // R
    else if (userResponse == 'R'){
        if (compResponse == 'S'){
            console.log('You Win')
            userWins++
        }else{
            console.log('You lost')
            compWins++
        }
    }
    // P
    else if (userResponse == 'P'){
        if (compResponse == 'R'){
            console.log('You Win')
            userWins++
        }else{
            console.log('You lost')
            compWins++
        }
    }

    // S
    else if (userResponse == 'S'){
        if (compResponse == 'P'){
            console.log('You Win')
            userWins++
        }else{
            console.log('You lost')
            compWins++
        }
    }i++
}

console.log(`Out of ${tries} games:`)
console.log(`You got ${userWins} point(s) and the computer got ${compWins} point(s).`)
// Comparing Results
if (userWins > compWins){
    console.log("Congrats, you win the game!!!")
}else if(userWins == compWins){
    console.log("It was a tie.")
}else if(userWins < compWins){
    console.log("You lost the game.")
}