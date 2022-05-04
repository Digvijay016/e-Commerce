import { CartItem } from "./CartItem";
import { Comics } from "./comic";

export class Cart{
    items:CartItem[] = [];  
    
    
    get totalQuantity():number{
        let totalQuantity = 0;
        this.items.forEach(item =>{
            totalQuantity += item.quantity;
        });

        return totalQuantity;
    }

    get totalPrice():number{
        let totalPrice = 0;
        this.items.forEach(item =>{
            totalPrice += item.price;
        });

        return totalPrice;
    }
}