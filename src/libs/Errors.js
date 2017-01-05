export class InvalidArgumentError extends Error {
    constructor(message) {
        super(message);

        this.name = this.constructor.name;
        this.message = message;
    }
}

export class NotImplementedError extends Error {
    constructor(message) {
        super(message);

        this.name = this.constructor.name;
        this.message = message;
    }
}