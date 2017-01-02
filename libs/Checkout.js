class Checkout {
    constructor(pricingOptions) {
        if (pricingOptions) {
            this.pricingOptions = pricingOptions;
        }

        this.items = [];
    }

    add(item) {
        if (!this.items) {
            this.items = [];
        }

        this.items.push(item);
    }

    total() {
        let totalAmount = 0;
        this.items.forEach((i) => {
            totalAmount += i.price;
        });
        return totalAmount;
    }
}

module.exports = Checkout;