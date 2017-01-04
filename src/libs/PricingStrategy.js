import PricingRuleTypes from './PricingRuleTypes';

class PricingStrategy {
    static create(pricingRule) {
        let strategy;

        if (pricingRule) {
            switch (pricingRule.type) {
                case PricingRuleTypes.RATIO:
                    strategy = new RatioStrategy(pricingRule);
                    break;
                case PricingRuleTypes.PRICE:
                    strategy = new PriceStrategy(pricingRule);
                    break;
                case PricingRuleTypes.QUANTITY:
                    strategy = new QuantityStrategy(pricingRule);
                    break;
            }
        }
        else {
            strategy = new DefaultStrategy();
        }

        return strategy;
    }
};

function DefaultStrategy() {
    this.calculate = (item, quantity) => {
        return item.price * quantity;
    }
}

function RatioStrategy(pricingRule) {
    this.pricingRule = pricingRule;
    this.calculate = (item, quantity) => {
        // Compute for bundled total amount
        let bundleQty = Math.floor(quantity / pricingRule.denominator) * pricingRule.denominator;
        let bundleDiscount = pricingRule.numerator / pricingRule.denominator;
        let bundleTotal = (bundleQty * item.price) * bundleDiscount;

        // Compute for total amount in excess of bundle quantity
        let excessQty = quantity - bundleQty;
        let excessTotal = excessQty * item.price

        // Sum of bundle and excess
        return bundleTotal + excessTotal;
    };
};

function PriceStrategy(pricingRule) {
    this.pricingRule = pricingRule;
    this.calculate = (item, quantity) => {
        // The price set for the customer is used insted of the item price.
        return pricingRule.price * quantity;
    }
}

function QuantityStrategy(pricingRule) {
    this.pricingRule = pricingRule;
    this.calculate = (item, quantity) => {
        // PRICE depends on the  minimum quantity set for certain customers, otherwise the item price is used.
        let pricePerItem = quantity >= pricingRule.quantity ? pricingRule.price : item.price;
        return pricePerItem * quantity;
    }
}

module.exports = PricingStrategy;