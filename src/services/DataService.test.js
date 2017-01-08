import DataService from './DataService';
import { MockAdsDataContext, MockCustomersDataContext } from './MockDataContext';
import { InvalidArgumentError, NotImplementedError } from '../lib/Errors';

describe('Data Service', () => {
    const mockDataContext = {
        get: () => { }
    };
    const mockCustomersDataContext = new MockCustomersDataContext();
    const mockAdsDataContext = new MockAdsDataContext();

    // constructor Method
    it('should be created without errors when provider is valid', () => {
        const dataService = new DataService(mockDataContext);
    });

    it('should throw an error when provider is invalid', () => {
        const newDataService = () => { const dataService = new DataService() };
        expect(newDataService).toThrowError('Context is invalid.');
    });

    // get Method
    it('expects get customers callback to have been called', (done) => {
        const dataService = new DataService(mockCustomersDataContext);
        const callback = (err, res) => {
            if (err) return done.fail(err);
            done();
        };
        dataService.get(callback);
    });

    it('expects get customers callback not to return error', (done) => {
        const dataService = new DataService(mockCustomersDataContext);
        const callback = (err, res) => {
            if (err) return done.fail(err);
            expect(err).toBeFalsy();
            done();
        };
        dataService.get(callback);
    });

    it('expects to return (4) customers', (done) => {
        const dataService = new DataService(mockCustomersDataContext);
        const callback = (err, res) => {
            if (err) return done.fail(err);
            expect(res).toHaveLength(4);
            done();
        };
        dataService.get(callback);
    });

    // get Method
    it('expects get ads callback to have been called', (done) => {
        const dataService = new DataService(mockAdsDataContext);
        const callback = (err, res) => {
            if (err) return done.fail(err);
            done();
        };
        dataService.get(callback);
    });

    it('expects get ads callback not to return error', (done) => {
        const dataService = new DataService(mockAdsDataContext);
        const callback = (err, res) => {
            if (err) return done.fail(err);
            expect(err).toBeFalsy();
            done();
        };
        dataService.get(callback);
    });

    it('expects to return (3) ads', (done) => {
        const dataService = new DataService(mockAdsDataContext);
        const callback = (err, res) => {
            if (err) return done.fail(err);
            expect(res).toHaveLength(3);
            done();
        };
        dataService.get(callback);
    });
});