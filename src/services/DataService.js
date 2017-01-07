import { InvalidArgumentError } from '../libs/Errors';

class DataService {
    constructor(context) {
        if (!context) {
            throw new InvalidArgumentError('Context is invalid.');
        }

        this.context = context;
    }

    get(callback) {
        let err;
        let res = this.context.get();

        if (callback) {
            callback(err, res);
        }
    }

    getByNameOrId(nameOrId, callback) {
        let err;
        let res = this.context.get(nameOrId);

        if (callback) {
            callback(err, res);
        }
    }
}

module.exports = DataService;