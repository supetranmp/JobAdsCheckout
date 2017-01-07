import PricingRuleTypes from '../libs/PricingRuleTypes';
import AdTypes from '../libs/AdTypes';

const Customers = [
    {
        name: 'Unilever',
        pricingRules: [
            {
                type: PricingRuleTypes.RATIO,
                itemId: AdTypes.CLASSIC,
                numerator: 2,
                denominator: 3
            }
        ]
    },
    {
        name: 'Apple',
        pricingRules: [
            {
                type: PricingRuleTypes.PRICE,
                itemId: AdTypes.STANDOUT,
                price: 299.99
            }
        ]
    },
    {
        name: 'Nike',
        pricingRules: [
            {
                type: PricingRuleTypes.QUANTITY,
                itemId: AdTypes.PREMIUM,
                quantity: 4,
                price: 379.99
            }
        ]
    },
    {
        name: 'Ford',
        pricingRules: [
            {
                type: PricingRuleTypes.RATIO,
                itemId: AdTypes.CLASSIC,
                numerator: 4,
                denominator: 5
            },
            {
                type: PricingRuleTypes.PRICE,
                itemId: AdTypes.STANDOUT,
                price: 309.99
            },
            {
                type: PricingRuleTypes.QUANTITY,
                itemId: AdTypes.PREMIUM,
                quantity: 3,
                price: 389.99
            }
        ]
    }
];

Customers.findByName = (name) => {
    return Customers.find((c) => {
        return c.name === name && name.trim()
    });
};

module.exports = Customers;