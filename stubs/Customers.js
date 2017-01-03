import PricingRuleTypes from '../libs/PricingRuleTypes';
import AdTypes from '../libs/AdTypes';

const Customers = [
    {
        name: 'Unilever',
        pricingRules: [
            {
                type: PricingRuleTypes.Ratio,
                id: AdTypes.Classic,
                numerator: 2,
                denominator: 3
            }
        ]
    },
    {
        name: 'Apple',
        pricingRules: [
            {
                type: PricingRuleTypes.Price,
                id: AdTypes.Standout,
                price: 299.99
            }
        ]
    },
    {
        name: 'Nike',
        pricingRules: [
            {
                type: PricingRuleTypes.Quantity,
                id: AdTypes.Premium,
                quantity: 4,
                price: 379.99
            }
        ]
    },
    {
        name: 'Ford',
        pricingRules: [
            {
                type: PricingRuleTypes.Ratio,
                id: 'classic',
                numerator: 4,
                denominator: 5
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
];

Customers.findByName = (name) => {
    return Customers.find((c) => {
        return c.name === name.trim()
    });
};

module.exports = Customers;