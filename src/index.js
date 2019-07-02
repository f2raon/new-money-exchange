// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var result = {};
    var remainder = currency;
    var letters = {H: 50, Q: 25, D: 10, N: 5, P: 1};
    if (currency > 10000) return result = {'error': "You are rich, my friend! We don't have so much coins for exchange"};

    for (var key in letters) {
        if (remainder >= letters[key]) {
            let i = parseInt(remainder / letters[key]);
            result[key] = i;
            remainder = remainder - (letters[key] * i);
        }
    };

    return result;
}
