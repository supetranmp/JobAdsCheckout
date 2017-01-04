import AdTypes from '../libs/AdTypes';

const Ads = [
    {
        id: AdTypes.CLASSIC,
        name: 'Classic Ad',
        price: 269.99
    },
    {
        id: AdTypes.STANDOUT,
        name: 'Standout Ad',
        price: 322.99
    },
    {
        id: AdTypes.PREMIUM,
        name: 'Premium Ad',
        price: 394.99
    }
];

Ads.findById = (id) => {
    return Ads.find((a) => {
        return a.id === id;
    });
};

module.exports = Ads;