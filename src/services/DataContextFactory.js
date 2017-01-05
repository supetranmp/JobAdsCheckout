import { MockAdsDataContext, MockCustomersDataContext } from '../services/MockDataContext';

class DataContextFactory {
    static get AdsDataContext() {
        return new MockAdsDataContext();
    }

    static get CustomersDataContext() {
        return new MockCustomersDataContext();
    }
}

module.exports = DataContextFactory;