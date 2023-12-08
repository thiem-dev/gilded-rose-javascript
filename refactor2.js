import { specialItemsList } from "./specialItemList.js";

export class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
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








