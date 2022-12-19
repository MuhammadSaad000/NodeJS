const os = require('os');

//windows, mac or linux
console.log(os.platform());

//cpu arch
console.log(os.arch());

//cpu core info
console.log(os.cpus());

//free memory in os 
console.log(os.freemem());

console.log(os.totalmem());

//home directory
console.log(os.homedir());

//gives total time in ms from when our system has been running
console.log(os.uptime());

