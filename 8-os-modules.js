

const os = require('os')
//we are looking for built-in module 

const user = os.userInfo();
console.log(user);


console.log(`The system uptime is : ${os.uptime()}`);

const currentOS ={
    name:os.type(),
    release :os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}

console.log(currentOS);