class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {

    if (this.cards == null) {
      return undefined
    }

    let m = this.cards.length, t, i;


    while (m) {


      i = Math.floor(Math.random() * m--);


      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }

    return this.cards;


  }

  checkIfPair(card1, card2) {
    this.pairsClicked++

    if (card1 == card2) {
      this.pairsGuessed++
      return true
    } else {
      return false
    }


  }

  checkIfFinished() {
    if (this.pairsGuessed == this.cards.length / 2) {
      return true
    } else {
      return false
    }
  }
}
