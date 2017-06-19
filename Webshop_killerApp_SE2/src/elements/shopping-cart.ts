import { bindable, computedFrom, autoinject } from 'aurelia-framework';
import { Product } from "../entities/Product";
import { CartService } from "../services/CartService";

@autoinject
export class ShoppingCart {
    value:Product[] = [];

    constructor(private cartService: CartService) { }

    get isEmpty(): boolean {
        return this.value == null || this.value.length === 0;
    }

    get sum() {
        let LocalSum = 0;
        for (let v of this.value) {
            LocalSum += v.price;
        }
        return LocalSum.toFixed(2);
    }

    async attached() {
        this.value = await this.cartService.getCart();
    }

    async removeProduct(product: Product) {
        await this.cartService.removeProduct(product.id);
    }
    
}

