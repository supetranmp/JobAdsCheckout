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
        let totalAmount = 0;
        this.items.forEach((i) => {
            const pricingRule = this.pricingRules.find((pr) => {
                return pr.id === i.id;
            });

            switch (pricingRule) {
                case PricingRuleTypes.Percentage:
                totalAmount += i
                    break;
                default:
                    totalAmount += i.price;
            }

        });
        return totalAmount;
    }
}

module.exports = Checkout;