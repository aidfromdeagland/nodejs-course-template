const { Command } = require('commander');
const program = new Command();

program
  .option('-s, --shift, <number>', 'a shift')
  .option('-i, --input, <filename>', 'an input file')
  .option('-o, --output, <filename>', 'an output file')
  .option('-a, --action, <action>', 'an action encode/decode')
  .parse(process.argv);
