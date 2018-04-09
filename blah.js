      // npm install chalk
var chalk = require("chalk");
          // npm install kirby-dance
var kirbyDance = require("kirby-dance");

console.log( chalk.bgMagenta(kirbyDance(7)) );
console.log( kirbyDance(-4) );

console.log( chalk.magenta.bgGreen("Blah") );
console.log( chalk.bgYellow.red("Pizza") );

function hello (recipient) {
  console.log("Hello, " + recipient + "!");
  console.log( chalk.blue("Hello, " + recipient + "!") );
}

hello("world");
hello("Sami");
hello("Leonard");
