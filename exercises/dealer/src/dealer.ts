
/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export enum Suit {
  Clubs, Diamonds, Hearts, Spades
}

export enum CardNumber {
  Ace, 
  Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten,
  Jack, Queen, King
}

export type Card = [Suit, CardNumber]


const card1: Card = [Suit.Diamonds, CardNumber.Ace];

const numSuits: number = Object.keys(Suit).length / 2;
const numCardNumbers: number = Object.keys(CardNumber).length / 2;

export class Dealer {
  deck: Card[] = [];

  constructor() {
    let num = 0;
    let suit = 0;
    while (num < numCardNumbers) {
      while (suit < numSuits) {
        this.deck.push([suit, num]);
        suit++;
      }
      num++;
      suit = 0;
    }
    shuffleArray(this.deck);
    // console.log(`Created deck with ${this.deck.length} cards.`)
  }

  dealHand(numCards: number): Card[] {
    if (numCards < 0 || numCards > this.getLength()) {
      throw new Error(`Num cards must be more than 0 and less than ${this.getLength()}`);
    }
    
    let hand = this.deck.splice(0, numCards);
    //console.log(`You were dealt ${hand.map(readCard))}`);
    return hand;
  }

  getLength(): number {
    return this.deck.length;
  }

  readCard(card: Card): String {
    let description = `${CardNumber[card[1]]} of ${Suit[card[0]]}`;
    console.log(`Your card is ${description}`);
    return description
  }
}
