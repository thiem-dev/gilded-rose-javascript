import {items, updateListings, BasicItem, AgedItem, LegendaryItem, ConjuredItem, StagePass } from './refactor2.js'

items.push(new BasicItem("+5 Dexterity Vest", 10, 20));
items.push(new AgedItem("Aged Brie", 2, 0));
items.push(new BasicItem("Elixir of the Mongoose", 5, 7));
items.push(new LegendaryItem("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new StagePass("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new ConjuredItem("Conjured Mana Cake", 3, 6));
items.push(new BasicItem("Frosted Flakes", 5, 8))
items.push(new BasicItem("Lucky Charms", 0, 4))


updateListings();