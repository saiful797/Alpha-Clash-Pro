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
    console.log(currentAlphabetElement.innerText);
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