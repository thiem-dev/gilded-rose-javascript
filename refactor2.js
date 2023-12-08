export class Item {
    constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
}

export class BasicItem extends Item{
    constructor(name, sellIn, quality){
        super(name, sellIn, quality)
    }

    updateSellIn(){
        this.sellIn -= 1;
    }
    //quality cannot be less than 0
    updateQuality() {
        if(this.quality < 50){
            const decreaseValue = this.sellIn > 0 ? 1 : 2;
            this.quality = Math.max(this.quality - decreaseValue, 0)
        } else{
            this.quality = 50;
        }
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

export class AgedItem extends Item {
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

export class StagePass extends Item{
    constructor(name, sellIn, quality){
        super(name, sellIn, quality)
    }

    updateSellIn() {
        this.sellIn -= 1
      }
    updateQuality(){
        if (this.quality < 50) {
            this.quality += 1;
            if (this.sellIn <= 10) {
                this.quality += 1;
            }
            if (this.sellIn <= 5) {
                this.quality += 1;
            }
            if(this.sellIn <= 0) {
                this.quality = 0;
            }
        }
    }
}

export class ConjuredItem extends Item {
    constructor(name, sellIn, quality){
        super(name, sellIn, quality)
    }

    updateSellIn(){
        this.sellIn -= 1;
    }
    updateQuality() {
        if(this.quality < 50){
            const decreaseValue = this.sellIn > 0 ? 2 : 4;
            this.quality = Math.max(this.quality - decreaseValue, 0)
        } else{
            this.quality = 50;
         }
    }
}

export let items = []
export const updateListings = () => {
    for(let item of items){
        item.updateSellIn()
        item.updateQuality()
    }
}