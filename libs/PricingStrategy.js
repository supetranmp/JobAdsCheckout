import PricingRuleTypes from './PricingRuleTypes';

function DefaultStrategy() {
    this.calculate = (item) => {
        return item.price * item.quantity;
    }
}

function RatioPricingRule(pricingRule) {
    this.pricingRule = pricingRule;
    this.calculate = (item) => {
        // Compute for bundled total amount
        let bundleQty = Math.floor(item.quantity/pricingRule.denominator) * pricingRule.denominator;
        let bundleDiscount = pricingRule.numerator / pricingRule.denominator;
        let bundleTotal = (bundleQty * item.price) * bundleDiscount;
        
        // Compute for total amount in excess of bundle quantity
        let excessQty = item.quantity - bundleQty;
        let excessTotal = excessQty * item.price

        // Sum of bundle and excess
        return bundleTotal + excessTotal;
    };
};

class PricingStrategyFactory {
    static create(pricingRule) {
        let strategy;

        if (pricingRule) {
            switch (pricingRule.type) {
                case PricingRuleTypes.Ratio:
                    strategy = new RatioPricingRule(pricingRule);
                    break;
            }

        }
        else {
            strategy = new DefaultStrategy();
        }

        return strategy;
    }
};

module.exports = PricingStrategyFactory;