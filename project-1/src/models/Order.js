const fs = require('fs');
const path = require('path');

// Path to our large mock database
// Since this file is in src/models, we go up two levels to reach the root
const dataPath = path.join(__dirname, '..', '..', 'Online-Store-Orders.json');

class Order {
  static readData() {
    return new Promise((resolve, reject) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      });
    });
  }

  static async findAll(limit = 10) {
    const orders = await this.readData();
    return orders.slice(0, limit);
  }

  static async findById(id) {
    const orders = await this.readData();
    return orders.find(o => o.OrderID === id);
  }

  static async countAll() {
    const orders = await this.readData();
    return orders.length;
  }
}

module.exports = Order;
