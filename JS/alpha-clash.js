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

function continueGame(){
    //step-1: generate a random Alphabet
    const alphabet = GetARandomAlphabet();
    console.log('Your Random alphabet: ', alphabet);
}

function play(){
    hiddenElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}