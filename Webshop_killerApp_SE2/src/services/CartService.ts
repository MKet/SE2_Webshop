import { Product } from '../entities/Product';


export class CartService {

    private isStorageSupported(): boolean {
        return window.localStorage !== null;
    }
    
    private static cart: Product[];

    private cartKey: string = 'cart';

    constructor() {
         CartService.cart = [];
    }

    public async getCart(): Promise<Product[]> {
        if (this.isStorageSupported()) {
            let cart = JSON.parse(window.localStorage.getItem(this.cartKey));
            if (cart != null)
              CartService.cart = cart;
        }

        return CartService.cart;
    }

    public async addProduct(product: Product) {
        if (product == null)
            return
        for (let v of CartService.cart) {
            if (v.id === product.id) {
                return
            }
        }

        CartService.cart.push(product);

        this.save();
    }

    public removeProduct(product: number) {
        for (let v of CartService.cart) {
            if (v.id == product)
            {
                let index = CartService.cart.indexOf(v);
                CartService.cart.splice(index, 1);
                this.save();
            }
        }
    }

    private save() {
        if (this.isStorageSupported())
            window.localStorage.setItem(this.cartKey, JSON.stringify(CartService.cart));
    }
}