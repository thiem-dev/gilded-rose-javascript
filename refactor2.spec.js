import { expect, describe, it } from "vitest";
import { items, Item,  updateListings, BasicItem, LegendaryItem, AgedItem, StagePass, ConjuredItem } from "./refactor2.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new BasicItem("basic", 5, 3);
    items.push(testItem);

    updateListings();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });

  it("expired basic items degrade quality 2x faster", () => {
    const testItem = new BasicItem("regular expired item", -1, 10);
    items.push(testItem);

    updateListings();

    expect(testItem.quality).toBe(8);
    expect(testItem.sellIn).toBe(-2);
  });

  it("items cannot have 0 or less quality", () => {
    const testItem = new BasicItem("regular expired item", 5, 0);
    items.push(testItem);

    updateListings();

    expect(testItem.quality).toBe(0);
  });

  it("Aged Brie increases in quality as sellIn days decreases", () => {
    const testItem = new AgedItem("Aged Brie", 4, 0);
    items.push(testItem)

    updateListings();

    expect(testItem.quality).toBe(1);
    expect(testItem.sellIn).toBe(3);
  })


  it("Quality cannot increase over 50 except Sulfuras", () => {
    const testItem = new BasicItem("High Quality item", 5, 51);
    const sulfurasItem = new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80)
    const brieItem = new AgedItem("Aged Brie", 0, 50)
    
    items.push(testItem)
    items.push(sulfurasItem)
    items.push(brieItem)

    updateListings();

    expect(testItem.quality).toBe(50);
    expect(sulfurasItem.quality).toBe(80);
    expect(brieItem.quality).toBe(50)
  })


  it("backstage passes | quality +2 | less than 10 days ", () => {
    const testItem = new StagePass("Backstage passes to a TAFKAL80ETC concert", 9, 20);
    items.push(testItem)

    updateListings();

    expect(testItem.quality).toBe(22);
  })


  it("backstage passes | quality +3 | less than 5 days ", () => {
    const testItem = new StagePass("Backstage passes to a TAFKAL80ETC concert", 3, 20);
    items.push(testItem)

    updateListings();

    expect(testItem.quality).toBe(23);
  })

  it("backstage passes | quality is 0 | day 0 ", () => {
    const testItem = new StagePass("Backstage passes to a TAFKAL80ETC concert", 0, 20);
    items.push(testItem)

    updateListings();

    expect(testItem.quality).toBe(0);
  })

  it("conjured item lose 2x quality per day", () => {
    const testItem = new ConjuredItem("Conjured Mana Cake", 10, 30);
    items.push(testItem)

    updateListings();

    expect(testItem.quality).toBe(28);
  })

});




