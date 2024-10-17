//operating sistem
const os = require('os')

console.log(`${os.hostname}`);
console.log(`${os.platfrom}`);

//file sistem
const fs = require('fs')

console.log(fs.readFileSync("data.txt","utf8"));