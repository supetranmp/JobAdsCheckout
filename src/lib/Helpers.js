import currencyFormatter from 'currency-formatter';

const Helpers = {
    toCurrency: function (str, code) {
        if (!code) {
            code = { code: 'USD' };
        }

        return currencyFormatter.format(str, code);
    }
};

export default Helpers;