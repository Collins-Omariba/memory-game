document.addEventListener('DOMContentLoaded', () =>{

    //card options
    const cardArray = [
        {
            name: 'fries',
            img:'images/icons8-french-fries-100.png'
        },
        {
            name: 'fries',
            img:'images/icons8-french-fries-100.png'
        },
        {
            name: 'pizza',
            img:'images/icons8-pizza-100.png'
        },
        {
            name: 'pizza',
            img:'images/icons8-pizza-100.png'
        },
        {
            name: 'ice-cream',
            img:'images/icons8-ice-cream-cone-100.png'
        },
        {
            name: 'ice-cream',
            img:'images/icons8-ice-cream-cone-100.png'
        },
        {
            name: 'milk',
            img:'images/icons8-milk-100.png'
        },
        {
            name: 'milk',
            img:'images/icons8-milk-100.png'
        },
       ,
        {
            name: 'hot-dog',
            img:'images/icons8-hot-dog-100.png'
        },
        {
            name: 'hot-dog',
            img:'images/icons8-hot-dog-100.png'
        },
        {
            name: 'hamburger',
            img:'images/icons8-hamburger-100.png'
        },
        {
            name: 'hamburger',
            img:'images/icons8-hamburger-100.png'
        } 
    ]

cardArray.sort(() => 0.5 - Math.random());
const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen  =[];
var cardsChosenId = [];
var cardsWon = [];


//create your board
function createBoard(){
    for (let i = 0; i < cardArray.length-1; i++){
        var card = document.createElement('img');
        card.setAttribute('src', 'images/icons8-game-100.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
};

// //check for matches 
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId =cardsChosenId[0];
    const optionTwoId =cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]){
        alert('YOU FOUND A MATCH');
        cards[optionOneId].setAttribute('src', 'images/icons8-invert-selection-100.png');
        cards[optionTwoId].setAttribute('src', 'images/icons8-invert-selection-100.png');
        cardsWon.push(cardsChosen);
    }
    else{
        cards[optionOneId].setAttribute('src', 'images/icons8-game-100.png');
        cards[optionTwoId].setAttribute('src', 'images/icons8-game-100.png');
        alert('SORRY, TRY AGAIN')      
    }
    cardsChosen = [];
    cardsChosenId =[];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardsArray.length/2){
        resultDisplay.textContent = 'CONGRATS !! YOU FOUND THEM ALL'
    }
};

//flip your card
function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2){
        setTimeout(checkForMatch, 500);
    }

};


createBoard();













});

