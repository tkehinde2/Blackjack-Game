class Deck 
{
  constructor() 
  {
    this.deck = [];
    this.suits = ["Hearts","Clubs","Spades","Diams"]
    this.values = ["2","3","4","5","6","7","8","9","10","J","K","Q","A"] 
    this.createDeck();
  }

createDeck() 
{
  this.suits.forEach((suit) => {
    this.values.forEach((value) => {
      this.deck.push(new Card(suit,value));
    })
  })
}

getDeck()
{
  return this.deck;
}

}
