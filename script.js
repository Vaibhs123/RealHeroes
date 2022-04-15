const cards = document.querySelectorAll('.memory-card');

function flipcard(){
    console.log('I was clicked');
    console.log(this);
}

cards.forEach(card => card.addEventListener('click', flipcard));