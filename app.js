const passwordManager = require("./PasswordManager");
const yargs = require("yargs")
                .command(require('./commands/createProfileCommand'))
                .command(require('./commands/showProfileCommand'))
                .help()
                .argv;

const objPasswordManager = new passwordManager();
var strCommand = yargs._[0];
//create profile
if (strCommand == "create") {
    objPasswordManager.createProfile(yargs.name, {
        username : yargs.username,
        password: yargs.password
    });
}

//Show profiles
if ( strCommand == "show" ) {
    objPasswordManager.getProfile(yargs.name);
}