import { Comics } from "./comic";

export class CartItem{
    constructor(comic:Comics){
        this.comic = comic;
    }

    comic: Comics;
    quantity:number = 1;
    get price():number{
        return this.comic.price * this.quantity;
    }
}