import PricingRuleTypes from './PricingRuleTypes';
import PricingStrategy from './PricingStrategy';
import AdTypes from './AdTypes';

class Checkout {
    constructor(pricingRules) {
        this.cart = [];
        this.pricingRules = (pricingRules && [].concat(pricingRules)) || [];
    }

    add(item) {
        try {
            // Get item index from cart
            const itemIndex = findItemIndexByItemId(this.cart, item.id);

            // Get pricing rule for the specified item type            
            const pricingRule = findPricingRuleByItemId(this.pricingRules, item.id);
            const pricingStrategy = PricingStrategy.create(pricingRule);

            // Check if the item being added is already in the cart
            if (itemIndex >= 0) {
                // Increment the item's quantity
                const cartItem = this.cart[itemIndex];
                cartItem.quantity += 1;
                cartItem.price = pricingStrategy.calculate(item, cartItem.quantity);
            }
            else {
                // Add the item to the cart
                const itemPrice = pricingStrategy.calculate(item, 1);
                this.cart.push({
                    item: item,
                    quantity: 1,
                    price: itemPrice,
                    pricingRule: pricingRule
                });
            }
        }
        catch (err) {
            console.error(err.message);
        }
    }

    remove(item) {
        try {
            // Get item index from cart
            const itemIndex = findItemIndexByItemId(this.cart, item.id);
            this.cart.splice(itemIndex, 1);
        }
        catch (err) {
            console.error(err.message);
        }
    }

    total() {
        let total = 0;
        try {
            total = this.cart.reduce((a, b) => {
                return { price: a.price + b.price }
            }).price;
        }
        catch (err) {
            console.error(err.message);
        }
        finally {
            return total;
        }
    }
}

function findItemIndexByItemId(cart, itemId) {
    return cart.findIndex((element) => {
        return element.item.id === itemId;
    });
}

function findPricingRuleByItemId(pricingRules, itemId) {
    return pricingRules.find((pricingRule) => {
        return pricingRule.itemId === itemId
    });
}

module.exports = Checkout;