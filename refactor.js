import { specialItemsList } from "./specialItemList.js";

export class ItemR {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
}

export class MarketItem extends ItemR{
    constructor(name, sellIn, quality){
        super(name, sellIn, quality)
    }
    updateQuality(){
        if(specialItemsList.includes(this.name) || this.name.includes('Conjured')){
            this.updateSpecialItemQuality()
        } else {
            this.updateRegularItemQuality();
        }
        this.decreaseSellIn();
        if (this.sellIn < 0) {
            this.updateExpiredItemQuality();
        }
    }
    
    updateRegularItemQuality(){
        if(this.quality > 0 && this.name !== "Sulfuras, Hand of Ragnaros"){
            this.quality -= 1
        }
    }

    updateSpecialItemQuality(){
        if(this.name === "Backstage passes to a TAFKAL80ETC concert"){
            this.updateBackstagePassQuality()
            return;
        }
        if(this.name.includes('Conjured')){
            this.updateConjuredQuality()
            return;
        }
        if (this.quality < 50) {
            this.quality += 1;
        }
    }

    decreaseSellIn(){
        if (this.name !== "Sulfuras, Hand of Ragnaros") {
            this.sellIn -= 1;
        }
    }

    updateExpiredItemQuality(){
        if(this.name !== "Aged Brie" && this.name !== "Backstage passes to a TAFKAL80ETC concert"){
            this.updateRegularItemQuality()
        } else if(this.name === "Backstage passes to a TAFKAL80ETC concert") {
            this.quality = 0;
        } else if(this.name == "Aged Brie"){
            this.updateAgedBrieQuality()
        }
    }

    updateAgedBrieQuality(){
        if (this.quality < 50) {
            this.quality += 1;
        }
    }

    updateBackstagePassQuality(){
        if (this.quality < 50) {
            this.quality += 1;
            if (this.sellIn <= 10) {
                this.quality += 1;
            }
            if (this.sellIn <= 5) {
                this.quality += 1;
            }
        }
    }

    updateConjuredQuality(){
        this.quality -= 2;
    }
}

export let itemsR = [];

itemsR.push(new MarketItem("+5 Dexterity Vest", 10, 20));
itemsR.push(new MarketItem("Aged Brie", 2, 0));
itemsR.push(new MarketItem("Elixir of the Mongoose", 5, 7));
itemsR.push(new MarketItem("Sulfuras, Hand of Ragnaros", 0, 80));
itemsR.push(new MarketItem("Backstage passes to a TAFKAL80ETC concert", 15, 20));
itemsR.push(new MarketItem("Conjured Mana Cake", 3, 6));
itemsR.push(new MarketItem("Frosted Flakes", 5, 8))
itemsR.push(new MarketItem("Lucky Charms", 0, 4))

export const nextDay = () => {
    for(let item of itemsR){
        item.updateQuality()
    }
}

nextDay();