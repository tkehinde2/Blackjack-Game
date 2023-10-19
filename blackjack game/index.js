    let deckClass = new Deck();
    let deck1 = shuffle(deckClass.deck);
    let player1 = new Player();
    let dealer1 = new Dealer();
    

  function startGame(player,dealer,deck)
  {    
    console.clear();
    initialDeal(player,dealer,deck);
    document.getElementById("scoretext").innerHTML = getHandTotalValue(player);
    getHandTotalValue(dealer1);
    //console.log(getHandTotalValue(player));
    getCardsForDom(player1, "player_cards", "deck_selector");
    getCardsForDom(dealer1, "dealer_cards", "deck_selector");
  }
 


  function shuffle(deck)
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

  function initialDeal(player,dealer,deck)
  {
      player.hand.push(deck[0], deck[1]);
      dealer.hand.push(deck[2], deck[3]);
      deck.splice(0,4);
  } 

  function hit(deck, player)
  {
    let hitCard = deck.shift();
    player.hand.push(hitCard);
    getNewCard(player, hitCard);
    if (player == player1) 
    {
      createHandOnDom(hitCard, "player_cards", "deck_selector");
      document.getElementById("scoretext").innerHTML = player.handValue;
      dealerLogic(deck1,dealer1);
    }

    else if (player == dealer1)
    {
      createHandOnDom(hitCard, "dealer_cards", "deck_selector");
      setTimeout(checkWinner,3000, dealer1,player1);
    }
    

  } 

  function stay(player)
  {
    player.stay = true;
    dealerLogic(deck1,dealer1);
  } 

  function dealerLogic(deck, dealer) 
  {

    if (dealer.handValue < 19)
    {
      console.log("dealerhit")
      hit(deck,dealer);
    } 

    else if (dealer.handValue >= 19)
    {
      console.log("dealerstay")
      setTimeout(checkWinner,3000, dealer1,player1);     
    } 

  }

  function getNewCard(player,hitCard)
  {
    if (hitCard.value == "J" || hitCard.value == "Q" || hitCard.value == "K")
    {
      player.handValue +=  10;
    }

    else if(hitCard.value == "A" && player.handValue + 11 < 21 )
    {
      player.handValue +=  11;
    }

    else if(hitCard.value == "A" && player.handValue + 11 > 21 )
    {
      player.handValue +=  1;
    }

    else if (parseInt(hitCard.value) <= 10 )
    {
      player.handValue += parseInt(hitCard.value)
    }   

  }

  function getHandTotalValue(player)
  {
     player.hand.forEach((card) => {

    if (card.value == "J" || card.value == "Q" || card.value == "K")
    {
      player.handValue +=  10;
    }

    else if(card.value == "A" && player.handValue + 11 < 21 )
    {
      player.handValue +=  11;
    }

    else if(card.value == "A" && player.handValue + 11 > 21 )
    {
      player.handValue +=  1;
    }

    else if (parseInt(card.value) <= 10 )
    {
      player.handValue += parseInt(card.value)
    }   
       
    }); 
     return player.handValue;
  }

  function getFaceCardTotalValue(card,player)
  { 
    if(card.value == "Jack" || card.value == "Queen" || card.value == "King")
    {
      player.handValue +=  10;
    }

    if(card.value = "Ace" && player.handValue + 11 < 21 )
    {
      player.handValue +=  11;
    }

    if(card.value = "Ace" && player.handValue + 11 > 21 )
    {
      player.handValue += 1;
    }
  }

  function checkWinner(dealer,player)
  {
    console.log("Player:" + player1.handValue);
    console.log("Dealer:" + dealer1.handValue);

    if (dealer.handValue > player.handValue && dealer.handValue <= 21 && player.handValue < 21 || player.handValue > 21 || player.handValue > dealer.handValue && player.handValue > 21) 
    {
      window.location = "lose.html"; 
      return "Dealer Wins";
    }

    else if (player.handValue > dealer.handValue || dealer.handValue > 21 && player.handValue < 21)
    {
      window.location = "win.html"; 
      return "Player Wins";

    }

    else if (player.handValue == dealer.handValue)
    {
      window.location = "tie.html"
      return "Tie";
    }
    
  }

  function reload() 
  {
    window.location = "index.html"
  }




  createHandOnDom = (card,id,deckSelector) => {
 // creates the dom elements
// let ulWrapper = document.createElement("UL"); 
let list = document.createElement("LI");
let strongWrapper = document.createElement("STRONG");
let divWrapper = document.createElement("DIV");
let spanTextWrapper = document.createElement("SPAN");
let spanIconWrapper = document.createElement("SPAN");
 
// changes class and id of dom elements
divWrapper.className = `${card.constructor.name.toLowerCase() +
" rank-"+ card.value.toLowerCase() + " " + card.suit.toLowerCase()}`;
spanTextWrapper.className = "rank";
spanTextWrapper.innerHTML = card.value.toUpperCase();
spanIconWrapper.className = "suit";
spanIconWrapper.innerHTML = `${"&" + card.suit.toLowerCase()+";"}`
// appends the to each other and builds them properly on the dom
divWrapper.appendChild(spanTextWrapper);
divWrapper.appendChild(spanIconWrapper);
strongWrapper.appendChild(divWrapper);
list.appendChild(strongWrapper);
let resultDOM = document.getElementById(id);
resultDOM.appendChild(list);
};
 
getCardsForDom = (player, id,deckSelector) => {
 player.hand.forEach((card)=> {
   createHandOnDom(card,id,deckSelector);
 })
}
