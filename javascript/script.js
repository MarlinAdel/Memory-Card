let hasFlipCard = false;
let firstCard , secondCard;
let lockBoard =false;
var card = document.querySelectorAll('.memory_card');
var cards = Array.from(card);
for(var i=0;i<cards.length;i++){
    cards[i].addEventListener('click',flipcard)
}
function flipcard(){
    if(lockBoard== true) return;
    if(this == firstCard) return;
    this.classList.add('flip');
    if(!hasFlipCard){
        hasFlipCard=true;
        firstCard=this;
        return;
    }else{
        hasFlipCard=false;
        secondCard=this;
        checkForMatch();
    }
}
function checkForMatch(){    
    if(firstCard.dataset.framework === secondCard.dataset.framework){
        disableCards();
    }
    else{
         unflipCards();
        }
}
function disableCards(){
   firstCard.removeEventListener('click',firstCard);
        secondCard.removeEventListener('click',secondCard);
   setTimeout(() => { 
    firstCard.style.visibility="hidden";
    secondCard.style.visibility="hidden";
       }, 300);
    
}
function unflipCards(){
    lockBoard=true;
 setTimeout(() => {
            firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetCard();
        }, 400);
}
function resetCard(){
    [hasFlipCard,lockBoard]=[false,false];
    [firstCard,secondCard]=[null,null];
}
(function shuffle(){
	cards.forEach(card => {
		let randompos = Math.floor( Math.random()*32 );
		card.style.order = randompos;
	});
})();
