exports.command = "show"

exports.describe = 'Show Profile"'

exports.builder = {
    name: {
        alias: 'n',
        describe: 'Identifier of profile',
        demand: true
    }
}

exports.handler = function (argv) {
  // do something with argv.
}