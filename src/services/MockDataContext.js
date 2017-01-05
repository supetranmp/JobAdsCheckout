import Ads from '../stubs/Ads';
import Customers from '../stubs/Customers';

export class MockCustomersDataContext {
    get(name) {
        const customers = (name && Customers.findByName(name)) || Customers;
        return customers;
    }
}

export class MockAdsDataContext {
    get(id) {
        const ads = (id && Ads.findById(id)) || Ads;
        return ads;
    }
}