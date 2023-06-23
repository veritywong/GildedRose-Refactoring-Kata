const {Shop, Item} = require("./gildedRose");

describe("Gilded Rose", function() {
  it("should foo", function() {
    const items = new Item("foo", 0, 0)
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("foo");
    expect(itemUpdate[0].sellIn).toBe(-1);
    expect(itemUpdate[0].quality).toBe(0);
  });

  it("should keep value the same for 'Sulfuras, Hand of Ragnaras'", () => {
    const items = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(itemUpdate[0].sellIn).toBe(0);
    expect(itemUpdate[0].quality).toBe(80);
  })
  
  it("should increase quality for 'Aged Brie'", () => {
    const items = new Item("Aged Brie", 10, 1);
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("Aged Brie");
    expect(itemUpdate[0].sellIn).toBe(9);
    expect(itemUpdate[0].quality).toBe(2);
  })

  it("should increase quality by 1 for 'Backstage passes to a TAFKAL80ETC concert' when sellIn higher than 10", () => {
    const items = new Item("Backstage passes to a TAFKAL80ETC concert", 20, 1);
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(itemUpdate[0].sellIn).toBe(19);
    expect(itemUpdate[0].quality).toBe(2);
  })

  it("should increase quality by 1 for 'Backstage passes to a TAFKAL80ETC concert' when sellIn 6 - 10", () => {
    const items = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 1);
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(itemUpdate[0].sellIn).toBe(9);
    expect(itemUpdate[0].quality).toBe(3);
  })

  it("should increase quality by 1 for 'Backstage passes to a TAFKAL80ETC concert' when sellIn 5 or less", () => {
    const items = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 1);
    const gildedRose = new Shop([items]);
    const itemUpdate = gildedRose.updateQuality();
    expect(itemUpdate[0].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(itemUpdate[0].sellIn).toBe(4);
    expect(itemUpdate[0].quality).toBe(4);
  })
});