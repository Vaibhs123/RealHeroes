const cards = document.querySelectorAll('.memory-card');

let hasFilppedCard = false;
let firstCard, secondCard;

function flipcard(){
    this.classList.toggle('flip');

    if(!hasFilppedCard){
        //first click
        hasFilppedCard = true;
        firstCard = this;
    }
    else{
        //second click
        hasFilppedCard = false;
        secondCard = this;

        //do cards match?
        console.log(firstCard.dataset.work);
        console.log(secondCard.dataset.work);
    }
}

cards.forEach(card => card.addEventListener('click', flipcard));