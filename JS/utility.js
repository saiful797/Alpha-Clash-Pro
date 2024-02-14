function hiddenElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function GetARandomAlphabet(){
    //get or create alphabet array
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabet = alphabetString.split('');
    console.log(alphabet);

    //get a random index 0 to 25
    const randomNumber = math.random() * 25;
    const index = math.round(randomNumber);
    console.log(index);
}