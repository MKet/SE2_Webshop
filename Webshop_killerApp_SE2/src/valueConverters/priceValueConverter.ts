export class PriceValueConverter {
    toView(value) {
        if (typeof value !== "number")
            value = parseFloat(value);
        return '€'+value.toFixed(2);
    }
}