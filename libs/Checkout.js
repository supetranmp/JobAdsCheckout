import PricingRuleTypes from './PricingRuleTypes';
import PricingStrategy from './PricingStrategy';
import AdTypes from './AdTypes';

class Checkout {
    constructor(pricingRules) {
        this.items = [];
        this.pricingRules = [];

        if (pricingRules) {
            this.pricingRules = this.pricingRules.concat(pricingRules);
        }
    }

    add(item) {
        try {
            let itemIndex;
            let itemExists;
            let existingItem = this.items.find((element, index) => {
                if (itemExists = (element.id === item.id)) {
                    itemIndex = index;
                }
                return itemExists;
            });

            if (!existingItem) {
                this.items.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    quantity: 1
                });
            }
            else {
                this.items[itemIndex].quantity += 1;
            }
        }
        catch (err) {
            console.error(err.message)
        }
    }

    total() {
        let total = 0;

        try {
            this.items.forEach((item) => {
                const pricingRule = findPricingRuleById(this.pricingRules, item.id);
                const pricingStrategy = PricingStrategy.create(pricingRule);
                total += pricingStrategy.calculate(item);
            });
        }
        catch (err) {
            console.error(err.message);
        }
        finally {
            return total;
        }
    }
}

function findPricingRuleById(pricingRules, id) {
    return pricingRules.find((pricingRule) => {
        return pricingRule.id === id
    });
}

module.exports = Checkout;