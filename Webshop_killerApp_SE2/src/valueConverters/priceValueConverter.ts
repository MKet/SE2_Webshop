export class PriceValueConverter {
    toView(value: number) {
        return value.toFixed(2);
    }
}