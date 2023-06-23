class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      item.sellIn--;

      if (this.checkItemIsRegularItem(item)) {
        this.updateRegularItem(item);
      } else if (this.checkItemIsBackStagePasses(item)) {
        this.updateBackstagePasses(item);
      } else if (this.checkItemIsAgedBrie(item)) {
        this.updateAgedBrie(item);
      } else if (this.checkItemIsConjured(item)) {
        item.quality -= 2;
      } else if (this.checkItemIsSulfuras(item)) {
        item.sellIn++;
      }
    }

    return this.items;
  }

  updateAgedBrie(item) {
    if (item.quality < 50) {
      item.quality++;
    }
  }

  updateBackstagePasses(item) {
    item.quality++;

    if (item.sellIn < 1) {
      item.quality = 0;
    } else if (item.sellIn < 6 && item.quality < 50) {
      item.quality += 2;
    } else if (item.sellIn < 11 && item.quality < 50) {
      item.quality++;
    }
  }

  updateRegularItem(item) {
    if (item.quality > 0) {
      item.quality--;
    }
  }

  checkItemIsAgedBrie(item) {
    return item.name === "Aged Brie";
  }

  checkItemIsBackStagePasses(item) {
    return item.name === "Backstage passes to a TAFKAL80ETC concert";
  }

  checkItemIsConjured(item) {
    return item.name === "Conjured";
  }

  checkItemIsRegularItem(item) {
    return (
      item.name != "Sulfuras, Hand of Ragnaros" &&
      item.name != "Backstage passes to a TAFKAL80ETC concert" &&
      item.name != "Aged Brie" &&
      item.name != "Conjured"
    );
  }

  checkItemIsSulfuras(item) {
    return item.name === "Sulfuras, Hand of Ragnaros";
  }
}

module.exports = {
  Item,
  Shop,
};
