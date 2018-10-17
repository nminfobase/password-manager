const storage = require("node-persist");
const _ = require("underscore");
const CryptoJS = require("crypto-js")

module.exports = class PasswordManager {
    constructor() {
        storage.init({
        dir: 'persist',

        stringify: JSON.stringify,

        parse: JSON.parse,

        encoding: 'utf8',
    
        logging: false,  // can also be custom logging function
    
        ttl: false, // ttl* [NEW], can be true for 24h default or a number in MILLISECONDS
    
        expiredInterval: 2 * 60 * 1000, // every 2 minutes the process will clean-up the expired cache
    
        // in some cases, you (or some other service) might add non-valid storage files to your
        // storage dir, i.e. Google Drive, make this true if you'd like to ignore these files and not throw an error
        forgiveParseErrors: false

        });
    }

    async createProfile(strProfileName, arrProfile) {
        if( _.isObject(arrProfile) &&
            ! _.isUndefined(arrProfile.username) &&
            ! _.isUndefined(arrProfile.password)
        ) {
            console.log(arrProfile);
            var strProfile = CryptoJS.AES.encrypt(JSON.stringify(arrProfile), "Miglani");
            await storage.setItem(strProfileName, strProfile.toString());
        }
    }

    async getProfile(strProfileName) {

        var strProfile = await storage.getItem(strProfileName);
        if ( _.isUndefined(strProfile) ) {       
            console.error(new Error('Profile Not found'));
            return;
        }
        var arrProfile = CryptoJS.AES.decrypt(strProfile, "Miglani");

        console.log(arrProfile.toString(CryptoJS.enc.Utf8));
    }
};


