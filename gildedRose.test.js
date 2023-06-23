const {Shop, Item} = require("./gildedRose");

describe("Shop", () => {
 
  test("regularItems decrease sellIn and quality by 1", () => {
    const items = new Item("foo", 0, 1)
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("foo");
    expect(itemUpdate[0].sellIn).toBe(-1);
    expect(itemUpdate[0].quality).toBe(0);
  });
  
  test("item quality can not go below 0", () => {
    const items = new Item("foo", 0, 0)
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("foo");
    expect(itemUpdate[0].sellIn).toBe(-1);
    expect(itemUpdate[0].quality).toBe(0);
  });
  
  test("agedBrie goes up in quality by 1", () => {
    const items = new Item("Aged Brie", 10, 1);
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("Aged Brie");
    expect(itemUpdate[0].sellIn).toBe(9);
    expect(itemUpdate[0].quality).toBe(2);
  })

  test("quality cannot go above 50", () => {
    const items = new Item("Aged Brie", 10, 50);
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("Aged Brie");
    expect(itemUpdate[0].sellIn).toBe(9);
    expect(itemUpdate[0].quality).toBe(50);
  })

  test("backstagePasses quality increase by 1 when sellIn is higher than 10", () => {
    const items = new Item("Backstage passes to a TAFKAL80ETC concert", 20, 1);
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(itemUpdate[0].sellIn).toBe(19);
    expect(itemUpdate[0].quality).toBe(2);
  })

  test("backstagePasses quality increases by 2 when sellIn is between 6 & 10", () => {
    const items = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 1);
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(itemUpdate[0].sellIn).toBe(9);
    expect(itemUpdate[0].quality).toBe(3);
  })

  test("backstagePasses quality increases by 2 when sellIn 5 or less", () => {
    const items = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 1);
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(itemUpdate[0].sellIn).toBe(4);
    expect(itemUpdate[0].quality).toBe(4);
  })

  test("backstagePasses quality decreases to 0 after the concert", () => {
    const items = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10);
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(itemUpdate[0].sellIn).toBe(-1);
    expect(itemUpdate[0].quality).toBe(0);
  })

  test("quality cannot go above 50", () => {
    const items = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 50);
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(itemUpdate[0].sellIn).toBe(14);
    expect(itemUpdate[0].quality).toBe(50);
  })

  test("quality cannot go above 50", () => {
    const items = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 50);
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(itemUpdate[0].sellIn).toBe(9);
    expect(itemUpdate[0].quality).toBe(50);
  })

  test("quality cannot go above 50", () => {
    const items = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50);
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(itemUpdate[0].sellIn).toBe(4);
    expect(itemUpdate[0].quality).toBe(50);
  })

  test("conjured decreases in quality by 2", () => {
    const items = new Item("Conjured", 5, 50);
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("Conjured");
    expect(itemUpdate[0].sellIn).toBe(4);
    expect(itemUpdate[0].quality).toBe(48);
  })

  test("sulfuras quality and sellIn stays the same", () => {
    const items = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(itemUpdate[0].sellIn).toBe(0);
    expect(itemUpdate[0].quality).toBe(80);
  })

});