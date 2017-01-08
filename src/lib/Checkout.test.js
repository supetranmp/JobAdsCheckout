import Checkout from './Checkout';
import AdTypes from './AdTypes';
import Ads from '../stubs/Ads';
import Customers from '../stubs/Customers';

describe('Checkout', () => {
    // Ads
    const classicAd = Ads.findById(AdTypes.CLASSIC);
    const standoutAd = Ads.findById(AdTypes.STANDOUT);
    const premiumAd = Ads.findById(AdTypes.PREMIUM);

    // Customers
    const unilever = Customers.findByName('Unilever');
    const apple = Customers.findByName('Apple');
    const nike = Customers.findByName('Nike');
    const ford = Customers.findByName('Ford');

    describe('Expected checkout total after adding item(s)', () => {

        it('for default customer is $987.97 ', () => {
            const checkout = new Checkout();
            checkout.add(classicAd);
            checkout.add(standoutAd);
            checkout.add(premiumAd);
            expect(checkout.total()).toBe(987.97);
        });

        it('for Unilever is $934.97', () => {
            const checkout = new Checkout(unilever.pricingRules);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(premiumAd);
            expect(checkout.total()).toBe(934.97);
        });

        it('for Apple is $1294.96', () => {
            const checkout = new Checkout(apple.pricingRules);
            checkout.add(standoutAd);
            checkout.add(standoutAd);
            checkout.add(standoutAd);
            checkout.add(premiumAd);
            expect(checkout.total()).toBe(1294.96);
        });

        it('for Nike is $1519.96', () => {
            const checkout = new Checkout(nike.pricingRules);
            checkout.add(premiumAd);
            checkout.add(premiumAd);
            checkout.add(premiumAd);
            checkout.add(premiumAd);
            expect(checkout.total()).toBe(1519.96);
        });

        it('for Ford is $2559.92', () => {
            const checkout = new Checkout(ford.pricingRules);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(standoutAd);
            checkout.add(premiumAd);
            checkout.add(premiumAd);
            checkout.add(premiumAd);
            expect(checkout.total()).toBe(2559.92);
        });
    });

    describe('Expected checkout total after subtracting item(s)', () => {
        it('for default customer is $717.98', () => {
            const checkout = new Checkout();
            checkout.add(classicAd);
            checkout.add(standoutAd);
            checkout.add(premiumAd);
            checkout.subtract(classicAd);
            expect(checkout.total()).toBe(717.98);
        });

        it('for Unilever is $934.97', () => {
            const checkout = new Checkout(unilever.pricingRules);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(premiumAd);
            checkout.subtract(classicAd);
            expect(checkout.total()).toBe(934.97);
        });

        it('for Apple is $994.97', () => {
            const checkout = new Checkout(apple.pricingRules);
            checkout.add(standoutAd);
            checkout.add(standoutAd);
            checkout.add(standoutAd);
            checkout.add(premiumAd);
            checkout.subtract(standoutAd);
            expect(checkout.total()).toBe(994.97);
        });

        it('for Nike is $1184.97', () => {
            const checkout = new Checkout(nike.pricingRules);
            checkout.add(premiumAd);
            checkout.add(premiumAd);
            checkout.add(premiumAd);
            checkout.add(premiumAd);
            checkout.subtract(premiumAd);
            expect(checkout.total()).toBe(1184.97);
        });

        it('for Ford is $2249.93', () => {
            const checkout = new Checkout(ford.pricingRules);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(standoutAd);
            checkout.add(premiumAd);
            checkout.add(premiumAd);
            checkout.add(premiumAd);
            checkout.subtract(standoutAd);
            expect(checkout.total()).toBe(2249.93);
        });
    });

    describe('Expected checkout total after removing item(s)', () => {
        it('for default customer is $717.98', () => {
            const checkout = new Checkout();
            checkout.add(classicAd);
            checkout.add(standoutAd);
            checkout.add(premiumAd);
            checkout.remove(classicAd);
            expect(checkout.total()).toBe(717.98);
        });

        it('for Unilever is $394.99', () => {
            const checkout = new Checkout(unilever.pricingRules);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(premiumAd);
            checkout.remove(classicAd);
            expect(checkout.total()).toBe(394.99);
        });

        it('for Apple is $394.99', () => {
            const checkout = new Checkout(apple.pricingRules);
            checkout.add(standoutAd);
            checkout.add(standoutAd);
            checkout.add(standoutAd);
            checkout.add(premiumAd);
            checkout.remove(standoutAd);
            expect(checkout.total()).toBe(394.99);
        });

        it('for Nike is $0.00', () => {
            const checkout = new Checkout(nike.pricingRules);
            checkout.add(premiumAd);
            checkout.add(premiumAd);
            checkout.add(premiumAd);
            checkout.add(premiumAd);
            checkout.remove(premiumAd);
            expect(checkout.total()).toBe(0);
        });

        it('for Ford is $1479.96', () => {
            const checkout = new Checkout(ford.pricingRules);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(classicAd);
            checkout.add(standoutAd);
            checkout.add(premiumAd);
            checkout.add(premiumAd);
            checkout.add(premiumAd);
            checkout.remove(classicAd);
            expect(checkout.total()).toBe(1479.96);
        });
    });
});
