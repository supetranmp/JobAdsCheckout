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
const applePricingRules = Customers.findByName('Apple');
const nikePricingRules = Customers.findByName('Nike');
const fordPricingRules = Customers.findByName('Ford');

// Tests
it('total expected is equal to $987.97', () => {
    const checkout = new Checkout();
    checkout.add(classicAd);
    checkout.add(standoutAd);
    checkout.add(premiumAd);
    expect(checkout.total()).toBe(987.97);
});

it('total expected is equal to $934.97', () => {
    const checkout = new Checkout(unilever.pricingRules);
    checkout.add(classicAd);
    checkout.add(classicAd);
    checkout.add(classicAd);
    checkout.add(premiumAd);
    expect(checkout.total()).toBe(934.97);
}); 4