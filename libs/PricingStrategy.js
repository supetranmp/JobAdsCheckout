import PricingRuleTypes from './PricingRuleTypes';

class PricingStrategy {
    static create(pricingRule) {
        let strategy;

        if (pricingRule) {
            switch (pricingRule.type) {
                case PricingRuleTypes.Ratio:
                    strategy = new RatioStrategy(pricingRule);
                    break;
                case PricingRuleTypes.Price:
                    strategy = new PriceStrategy(pricingRule);
                    break;
                case PricingRuleTypes.Quantity:
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
    this.calculate = (item) => {
        return item.price * item.quantity;
    }
}

function RatioStrategy(pricingRule) {
    this.pricingRule = pricingRule;
    this.calculate = (item) => {
        // Compute for bundled total amount
        let bundleQty = Math.floor(item.quantity / pricingRule.denominator) * pricingRule.denominator;
        let bundleDiscount = pricingRule.numerator / pricingRule.denominator;
        let bundleTotal = (bundleQty * item.price) * bundleDiscount;

        // Compute for total amount in excess of bundle quantity
        let excessQty = item.quantity - bundleQty;
        let excessTotal = excessQty * item.price

        // Sum of bundle and excess
        return bundleTotal + excessTotal;
    };
};

function PriceStrategy(pricingRule) {
    this.pricingRule = pricingRule;
    this.calculate = (item) => {
        return pricingRule.price * item.quantity;
    }
}

function QuantityStrategy(pricingRule) {
    this.pricingRule = pricingRule;
    this.calculate = (item) => {
        let pricePerItem = item.quantity >= pricingRule.quantity ? pricingRule.price : item.price;
        return pricePerItem * item.quantity;
    }
}

module.exports = PricingStrategy;