interface Item {
    name: string,
    price: number,
    qty: number,
}

interface Cart {
    items: Item[],
    length: number,
    total: number,
    add: (name: string, price: number, qty ?: number) => Cart,
    addItem: (item: Item) => Cart,
}

export function cashier(): Cart {
    let items: Item[] = [];
    
    return {

        add(name: string, 
            price: number, 
            qty ?: number) { 
                this.addItem({
                    name: name,
                    price: price,
                    qty: qty || 1,
                });
                return this;
            },

        addItem(item: Item) {
            items.push(item);
            return this;
        },

        get length() {
            let qty_sum = 0;
            for (let i=0; i<this.items.length; i++) {
                qty_sum += this.items[i].qty;
            }
            return qty_sum;
        },

        get items() {
            return items;
        },

        get total() {
            let price_sum = 0;
            for (let i=0; i<this.items.length; i++) {
                price_sum += items[i].price * this.items[i].qty;

            }
            return price_sum;
        }

    }
}

let cart = cashier();

cart
  .add('Apple', 0.99)
  .add('Pear', 0.99, 2)
  .addItem({name:'Hand Cream', price:18, qty:1})
;