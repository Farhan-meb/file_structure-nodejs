const createSku = function () {
    var text = 'SDL';
    var possible = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (var i = 0; i < 9; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
};

module.exports = {
    createSku,
};
