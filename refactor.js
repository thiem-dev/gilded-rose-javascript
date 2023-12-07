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

    reduceQuality(){
        this.quality -= 1;
    }
}


export let itemsR = [];

itemsR.push(new ItemR("+5 Dexterity Vest", 10, 20));
itemsR.push(new ItemR("Aged Brie", 2, 0));
itemsR.push(new ItemR("Elixir of the Mongoose", 5, 7));
itemsR.push(new ItemR("Sulfuras, Hand of Ragnaros", 0, 80));
itemsR.push(new ItemR("Backstage passes to a TAFKAL80ETC concert", 15, 20));
itemsR.push(new ItemR("Conjured Mana Cake", 3, 6));
itemsR.push(new MarketItem("Frosted Flakes", 5, 8))





export const updateQuality2 = () => {
    console.log(itemsR)
    for(let item of itemsR){
        const constructor = item.constructor.name


        
        if(constructor === 'MarketItem'){
            item.reduceQuality()
        }

    }

    console.log(itemsR)
}

updateQuality2();