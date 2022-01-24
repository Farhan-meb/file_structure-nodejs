const axios = require('axios');

function createOTP() {
    var text = '';
    var possible = '0123456789';

    for (var i = 0; i < 6; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

const sendOTP = function (clientNumber) {
    const smsToken = process.env.BDSMS_ACCESS_TOKEN;

    let message = '<#> Dear User, Your OTP code is : ';

    let data = {};

    data['otp'] = createOTP();

    message += data.otp;

    message += '\n\nShohozDeal Ltd.';

    const shohozDeal_sms = new URLSearchParams();
    shohozDeal_sms.append('token', smsToken);
    shohozDeal_sms.append('to', clientNumber);
    shohozDeal_sms.append('message', message);

    axios
        .post('', shohozDeal_sms)
        .then((response) => {
            data['message'] = response.data;
        })
        .catch((err) => console.log(err));

    return data;
};

const sendNewAccountMessage = function (clientNumber, password) {
    const smsToken = process.env.BDSMS_ACCESS_TOKEN;

    let message = '<#> Dear User, Your account information is\n';
    message += 'Mobile : ' + clientNumber + '\n';
    message += 'One time password : ' + password + '\n\n';
    message += 'Please do not share your message with anyone.';

    message += '\n\nShohozDeal Ltd.';

    const shohozDeal_sms = new URLSearchParams();
    shohozDeal_sms.append('token', smsToken);
    shohozDeal_sms.append('to', clientNumber);
    shohozDeal_sms.append('message', message);

    axios
        .post('', shohozDeal_sms)
        .then((response) => {
            data['message'] = response.data;
        })
        .catch((err) => console.log(err));
};

module.exports = {
    sendOTP,
    sendNewAccountMessage,
};
