"use strict";

class Storage {
  #items = [];

  constructor(props) {
    this.#items = props;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.#items.splice(this.#items.indexOf(itemToRemove), 1);
  }
}

console.log("");
console.log("Task 2:");

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems());
storage.addItem("Droid");
console.log(storage.getItems());
storage.removeItem("Prolonger");
console.log(storage.getItems());
