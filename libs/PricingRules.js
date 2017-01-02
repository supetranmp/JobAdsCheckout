import PricingRuleTypes from './PricingRuleTypes';
import AdTypes from './AdTypes';

const FakePricingRules = {
    unilever: [
        {
            type: PricingRuleTypes.Percentage,
            id: AdTypes.Classic,
            percentage: 0.33
        }
    ],
    apple: [
        {
            type: PricingRuleTypes.Price,
            id: AdTypes.Standout,
            price: 299.99
        }
    ],
    nike: [
        {
            type: PricingRuleTypes.Quantity,
            id: AdTypes.Premium,
            quantity: 4,
            price: 379.99
        }
    ],
    Ford: [
        {
            type: PricingRuleTypes.Percentage,
            id: 'classic',
            percentage: 0.2
        },
        {
            type: PricingRuleTypes.Price,
            id: AdTypes.Standout,
            price: 299.99
        },
        {
            type: PricingRuleTypes.Quantity,
            id: AdTypes.Premium,
            quantity: 3,
            pricePerAd: 389.99
        }
    ]
}

module.exports = FakePricingRules;