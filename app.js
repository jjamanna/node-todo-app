const yargs = require('yargs');

yargs.version('1.0.0');

yargs.command({
command: 'list',
describe: 'list all todo',
handler(){
    console.log('Listing...');
}
});
const argv = yargs.argv;
// console.log(argv);

const yargs = require('yargs');
const chalk = require('chalk');
yargs.version('1.0.0');
yargs.command({
    command: 'List',
    describe:'List all todo,',
    handler(){
        console.log(chalk.yellow.bgBlue('Listing...'));
    }
});