exports.command = "create"

exports.describe = 'Create Profile"'

exports.builder = {
    name: {
        alias: 'n',
        describe: 'Identifier of profile',
        demand: true
    },
    username: {
        alias: 'u',
        describe: 'Username',
        demand: true
    },
    password: {
        alias: 'p',
        describe: 'Password',
        demand: true
    }
}

exports.handler = function (argv) {
  // do something with argv.
}