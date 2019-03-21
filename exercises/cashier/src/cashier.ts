interface Item {
    name: string,
    price: number,
    qty: number,
}

export function cashier() {
    return {
        length: 0,
        total: 0,
        add(name: string, 
            price: number, 
            qty ?: number) { 
                qty = qty || 1;
                this.length += qty;
                this.total += price * qty;
                return this;
            },
        addItem(item: Item) {
            return this.add(
                item.name, 
                item.price, 
                item.qty
            );
        }
    }
}

let cart = cashier();

cart
  .add('Apple', 0.99)
  .add('Pear', 0.99, 2)
  .addItem({name:'Hand Cream', price:18, qty:1})
;