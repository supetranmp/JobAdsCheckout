import Checkout from './Checkout';
import AdStubs from './AdStubs';
import FakePricingRules from './FakePricingRules';

it('total expected is equal to $987.97', () => {
    const checkout = new Checkout();
    checkout.add(AdStubs.classic);
    checkout.add(AdStubs.standout);
    checkout.add(AdStubs.premium);
    expect(checkout.total()).toBe(987.97);
});

it('total expected is equal to $934.97', () => {
    const checkout = new Checkout();
    checkout.add(AdStubs.classic);
    checkout.add(AdStubs.classic);
    checkout.add(AdStubs.classic);
    checkout.add(AdStubs.premium);
    expect(checkout.total()).toBe(934.97);
});