#!/usr/bin/env node
import chalk from 'chalk';
import figlet from 'figlet';

function main() {
  const text = figlet.textSync('Utilnek');

  console.log(text);
  console.log(chalk.bgRed(' Utilnek BETA VERSION '));
}

main();
