const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('nav-open');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isOpen);
    });
}


// Logo rotation
var word = document.querySelector('.word');

var wordsArray = ['', ' AI ', ' Data ', ' Web ', ' Cloud ', ' Business ', ' Project '];
var wordsIncrease = 0;

function showText(){
    word.innerText = wordsArray[wordsIncrease];
    word.style.opacity = 1;
    wordsIncrease++;
    setTimeout('hideText()', 1500);
}

function hideText(){
    if(wordsIncrease >= wordsArray.length){
        wordsIncrease = 0;
    }
    word.style.opacity = 0;
    setTimeout('showText()', 500);
}

showText();
// End of Logo rotation
