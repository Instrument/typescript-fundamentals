
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
  Club, Diamond, Heart, Spade
}
export enum CardNumber {
  Ace, 
  Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten,
  Jack, Queen, King
}
export type Card = [Suit, CardNumber]


const card1: Card = [Suit.Diamond, CardNumber.Ace];

const numSuits: number = Object.keys(Suit).length / 2;
const numCardNumbers: number = Object.keys(CardNumber).length / 2;

export class Dealer {
  deck: Card[] = [];

  constructor() {
    let num = 0;
    let suit = 0;
    while (num < numCardNumbers) {
      this.deck.push([0, 0]);
      num++;
    }
  }

  dealHand(numCards: number): Card[] {
    if (numCards < 0 || numCards > this.deck.length) {
      throw new Error(`Num cards must be more than 0 and less than {this.deck.length}`);
    }
    
    let hand = this.deck.splice(0, numCards);
    return hand;
  }

  getLength(): number {
    return this.deck.length;
  }

  readCard(card: Card): String {
    return "Unknown"
  }
}
