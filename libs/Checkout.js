import PricingRuleTypes from './PricingRuleTypes';
import AdTypes from './AdTypes';

class Checkout {
    constructor(pricingRules) {
        this.items = [];
        this.pricingRules = [];

        if (pricingRules) {
            this.pricingRules.push(pricingRules);
        }
    }

    add(item) {
        if (!this.items) {
            this.items = [];
        }

        this.items.push(item);
    }

    total() {
        let total = 0;
        this.items.forEach((item) => {
            total += (this.pricingRules && this.pricingRules.compute && this.pricingRules.compute(item)) || item.price;
        });
        return total;
    }
}

module.exports = Checkout;