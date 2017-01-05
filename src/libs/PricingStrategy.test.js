import PricingRuleTypes from '../libs/PricingRuleTypes';
import PricingStrategy from './PricingStrategy';
import AdTypes from './AdTypes';

describe('Pricing Strategy', () => {
    describe('Expected pricing strategy', () => {
        it('is default strategy', () => {
            const pricingStrategy = PricingStrategy.create();
            expect(pricingStrategy.constructor.name).toBe('DefaultStrategy');
        });

        it('is ratio strategy', () => {
            const pricingStrategy = PricingStrategy.create({ type: PricingRuleTypes.RATIO });
            expect(pricingStrategy.constructor.name).toBe('RatioStrategy');
        });

        it('is price strategy', () => {
            const pricingStrategy = PricingStrategy.create({ type: PricingRuleTypes.PRICE });
            expect(pricingStrategy.constructor.name).toBe('PriceStrategy');
        });

        it('is quantity strategy', () => {
            const pricingStrategy = PricingStrategy.create({ type: PricingRuleTypes.QUANTITY });
            expect(pricingStrategy.constructor.name).toBe('QuantityStrategy');
        });
    });
});