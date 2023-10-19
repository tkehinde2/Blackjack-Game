
class Game  
{
  constructor(dealer, player)
  {
    this.dealerValue = 0;
    this.playerValue = 0;
    this.deckClass = new Deck();
    this.deck = this.deckClass.deck;
    this.player = player;
    this.dealer = dealer;
  }


  shuffle(deck)
  {
    let tempDeck = []; 
    this.deck.forEach((card) => {tempDeck.push(card);})
    this.deck = [];  
    for (let i = 0; i <= tempDeck.length; i++)
    {
      let randomNumber = Math.floor(Math.random() * tempDeck.length);
     
      this.deck.push(tempDeck[randomNumber]);
    }
    return this.deck;
  } 

  initialDeal(player,dealer,deck)
  {
    for (i = 1; i <= 2; i++)
    {
      this.player.hand.push(deck.shift);
      this.dealer.hand.push(deck.shift);
    }
  } 

  hit(deck)
  {
    let hitCard = this.deck.shift();
    this.hand.push(hitCard);
  } 

  stay(player)
  {
    player.stay = true;
  } 

  dealerLogic(deck, dealer) 
  {
    if (dealer.handValue < 16)
    {
      dealer.hit(this.deck);
    } 

    else if (dealer.handValue >= 16)
    {
      dealer.stay();       
    } 

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

  checkWinner(dealer,player)
  {
    if (dealer.handValue > player.handValue || player.handValue > 21) 
    {
      return "Dealer Wins";
    }

    else if (player.handValue > dealer.handValue || dealer.handValue > 21)
    {
      return "Player Wins";
    }
  }

}



