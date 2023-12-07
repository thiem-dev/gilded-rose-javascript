import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});

// test: sellin = 0 | quality degrade x2 

// test: quality negative

// test: aged brie increases in quality | sellin days decrease


// test quality over 50 | except sulfuras


// test: Sulfuras, Hand of Ragnaros quality states the same | non zero sellIn day

// test: concert increase in quality 
  // concert less than 10 days, quality + 2

  // concert less than 5 days, quality + 3

  // concert day 0 or negative, quality = 0?





//test:  conjured item degrade x2


