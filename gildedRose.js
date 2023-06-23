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

  updateAgedBrie(item) {
    item.sellIn--;
    if (item.quality < 50) {
      item.quality++;
    }
  }

  updateBackstagePasses(item) {
    item.quality++;
    item.sellIn--;

    if (item.sellIn < 6 && item.quality < 50) {
      item.quality += 2;
    } else if (item.sellIn < 11 && item.quality < 50) {
      item.quality++;
    }
  }

  updateRegularItem(item) {
    item.sellIn--;
    if (item.quality > 0) {
      item.quality - 1;
    }
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
        this.updateBackstagePasses(item);
      } else if (item.name === "Aged Brie") {
        this.updateAgedBrie(item);
      } else if (item.name != "Sulfuras, Hand of Ragnaros") {
        this.updateRegularItem(item);
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop,
};
