class Order {
  constructor(item) {
    // item will be an object
    //{title: , Price: }
    this.item = item;

    this.id = Math.floor(Math.random() * 99) + 1;
  }
}

module.exports = Order;
