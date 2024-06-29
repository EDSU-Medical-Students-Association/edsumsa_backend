require('dotenv').config();
const authCredentials = process.env.FIREBASE_SERVICE_ACCOUNT;
module.exports = {
    authCredentials
};
