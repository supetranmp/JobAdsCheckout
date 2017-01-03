import Checkout from './Checkout';
import AdTypes from './AdTypes';
import Ads from '../stubs/Ads';
import Customers from '../stubs/Customers';

// Ads
const classicAd = Ads.findById(AdTypes.Classic);
const standoutAd = Ads.findById(AdTypes.Standout);
const premiumAd = Ads.findById(AdTypes.Premium);

// Customers
const unilever = Customers.findByName('Unilever');
const apple = Customers.findByName('Apple');
const nike = Customers.findByName('Nike');
const ford = Customers.findByName('Ford');

// Tests

// Customer: default  
it('total expected is equal to $987.97', () => {
    const checkout = new Checkout();
    checkout.add(classicAd);
    checkout.add(standoutAd);
    checkout.add(premiumAd);
    expect(checkout.total()).toBe(987.97);
});

// Customer: Unilever
it('total expected is equal to $934.97', () => {
    const checkout = new Checkout(unilever.pricingRules);
    checkout.add(classicAd);
    checkout.add(classicAd);
    checkout.add(classicAd);
    checkout.add(premiumAd);
    expect(checkout.total()).toBe(934.97);
});

// Customer: Apple
it('total expected is equal to $1294.96', () => {
    const checkout = new Checkout(apple.pricingRules);
    checkout.add(standoutAd);
    checkout.add(standoutAd);
    checkout.add(standoutAd);
    checkout.add(premiumAd);
    expect(checkout.total()).toBe(1294.96);
});

// Customer: Nike
it('total expected is equal to $1519.96', () => {
    const checkout = new Checkout(nike.pricingRules);
    checkout.add(premiumAd);
    checkout.add(premiumAd);
    checkout.add(premiumAd);
    checkout.add(premiumAd);
    expect(checkout.total()).toBe(1519.96);
});

// Customer: Ford
it('total expected is equal to $', () => {
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