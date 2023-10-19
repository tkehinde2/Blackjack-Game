class Dealer
{
  constructor()
  {
    this.hand = [];
    this.handValue = 0;
    this.bust = false;
    this.twentyOne = false;
    this.stay = false;
  }
   

  shuffle(deck)
  {
    let tempDeck = []; 
    deck.forEach((card) => {tempDeck.push(card);})
    deck = [];  
    for (let i = 0; i <= tempDeck.length; i++)
    {
      let randomNumber = Math.floor(Math.random() * tempDeck.length);
     
      deck.push(tempDeck[randomNumber]);
    }
    return deck;
  }

  getHandTotalValue(hand)
  {
    this.handValue = 0;
    this.hand.forEach((card) => {this.handValue += card.value}); 
    return this.handValue;
  }

  getFaceCardTotalValue(card)
  {
    if(card.value == "Jack" || card.value == "Queen" || card.value == "King")
    {
      return this.handValue += 10;
    }

    if(card.value = "Ace" && this.handValue + 11 < 21 )
    {
      return this.handValue += 11;
    }

    if(card.value = "Ace" && this.handValue + 11 > 21 )
    {
      return this.handValue += 1;
    }
  }

  initialDeal(player,dealer,deck)
  {
    for (i = 1; i <= 2; i++)
    {
      player.hand.push(deck.shift);
      dealer.hand.push(deck.shift);
    }
  } 

  hit(deck)
  {
    let hitCard = deck.deck.shift();
    this.hand.push(hitCard);
  }

  stay()
  {
    this.stay = true;
  }

  dealerLogic(deck) 
  {
    if (this.handValue < 16)
    {
      this.hit(deck);
    } 

    else if (this.handValue >= 16)
    {
      this.stay();       
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