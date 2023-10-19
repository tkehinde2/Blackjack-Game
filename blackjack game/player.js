class Player
{
  constructor(){
    this.hand = [];
    this.handValue = 0;
    this.bust = false;
    this.twentyOne = false;
    this.stay = false;
  }

  hit(deck,player)
  {
    let hitCard = deck.shift();
    player.hand.push(hitCard);
  }

  stay(player)
  {
    player.stay = true;
  }

  getHandTotalValue(hand)
  {
     this.hand.forEach((card) => {this.handValue += card.value}); 
     return this.handValue;
  }

  getFaceCardTotalValue(card)
  {
    if(card.value == "Jack" || card.value == "Queen" || card.value == "King")
    {
      return card.value = 10;
    }

    if(card.value = "Ace" && this.handValue + 11 < 21 )
    {
      return card.value = 11;
    }

    if(card.value = "Ace" && this.handValue + 11 > 21 )
    {
      return card.value = 1;
    }
  }  

  checkBust()
  {
  if (this.handValue > 21)
  {
    this.bust = true;
  }
  }
}

   
  
