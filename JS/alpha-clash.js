// function play(){
//     //step-1: Hide the home screen. to hide the screen add and the class hidden to the home screen
//     const homeScreen = document.getElementById('home-screen');
//     homeScreen.classList.add('hidden');
//     // console.log(homeScreen.classList);


//     //step-2: Show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
//     // console.log(playGroundSection.classList);
// }

function handleKeyboardButtonPress(event){

    const playerPressed = event.key;
    console.log('Player pressed:',playerPressed);

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    
    console.log(playerPressed, currentAlphabet.toLocaleLowerCase());
    //console.log(currentAlphabetElement.innerText);

    //check matched or not
    if(playerPressed === currentAlphabet.toLocaleLowerCase()){
        console.log('You get a pont');
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;

        setTextElementValueById('current-score', updatedScore);

        // -----------------------------------------------------------------
        // //Update score
        // // 1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // //console.log(currentScore);

        // // 2.increase the score by 1
        // const newScore = currentScore + 1;
        // // 3.show the updated score
        // currentScoreElement.innerText = newScore;
        // //start a new round
        removeBackgroundColorById(playerPressed);
        continueGame();
    }
    else{
        console.log('You missed. You lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife);


        // -----------------------------------------------------------
        // //Step-1: Get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // //step-2: reduce the life count
        // const newLife = currentLife - 1;
        // //step-3: display the updated life count
        // currentLifeElement.innerText = newLife;
    }
}
//capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);


function continueGame(){
    //step-1: generate a random Alphabet
    const alphabet = GetARandomAlphabet();
    console.log('Your Random alphabet: ', alphabet);

    // set randomly generated alphabet to the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerHTML = alphabet.toUpperCase();

    //set background color
    setBackgroundColorById(alphabet);


}

function play(){
    hiddenElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}