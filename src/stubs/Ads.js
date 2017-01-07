import AdTypes from '../lib/AdTypes';

const Ads = [
    {
        id: AdTypes.CLASSIC,
        name: 'Classic Ad',
        description: 'Offers the most basic level of advertisement.',
        price: 269.99
    },
    {
        id: AdTypes.STANDOUT,
        name: 'Standout Ad',
        description: '​Allows advertisers to use a company logo and use a longer presentation text.',
        price: 322.99
    },
    {
        id: AdTypes.PREMIUM,
        name: 'Premium Ad',
        description: '​​Allows advertisers to use a company logo and use a longer presentation text, and puts the ad at the top of the results, allowing higher visibility.',
        price: 394.99
    }
];

Ads.findById = (id) => {
    return Ads.find((a) => {
        return a.id === id;
    });
};

module.exports = Ads;