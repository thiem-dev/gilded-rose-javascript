export class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
}

export class basicItem extends Item{
    constructor(name, sellIn, quality){
        super(name, sellIn, quality)
    }
    updateSellIn(){
        this.sellIn -= 1;
    }

    updateQuality() { 
        this.quality -= 1;
    }
}

export class LegendaryItem extends Item{
    constructor(name, sellIn, quality){
        super(name, null, quality)
    }
    updateSellIn(){
        //legendary doesn't expire
    }

    updateQuality() { 
        //legendary doesn't lose quality 
    }
}

export class AgedBrie extends Item {
    constructor(name, sellIn, quality){
        super(name, sellIn, quality)
    }

    updateSellIn(){
        this.sellIn -= 1;
    }
    updateQuality(){
        if (this.quality < 50) {
            this.quality += 1;
        }
    }
}

export class stagePass extends Item{
    constructor(name, sellIn, quality){
        super(name, sellIn, quality)
    }

    updateSellIn(){
        this.sellIn -= 1;
    }


}

export let items = []


items.push(new basicItem("+5 Dexterity Vest", 10, 20));
items.push(new AgedBrie("Aged Brie", 2, 0));
// items.push(new MarketItem("Elixir of the Mongoose", 5, 7));
// items.push(new MarketItem("Sulfuras, Hand of Ragnaros", 0, 80));
// items.push(new MarketItem("Backstage passes to a TAFKAL80ETC concert", 15, 20));
// items.push(new MarketItem("Conjured Mana Cake", 3, 6));
// items.push(new MarketItem("Frosted Flakes", 5, 8))
// items.push(new MarketItem("Lucky Charms", 0, 4))

export const updateListings = () => {
    for(let item of items){
        item.updateSellIn()
        item.updateQuality()
    }
}

updateListings();



