const url = require('url');

const myUrl = new URL('http://web.com:3000/hello.html?id=100&status=active');

console.log(myUrl.href);
console.log(myUrl.toString());

//root domain
console.log(myUrl.host);

console.log(myUrl.hostname);

console.log(myUrl.pathname);

console.log(myUrl.search);

console.log(myUrl.searchParams);

myUrl.searchParams.append("page", 123);
console.log(myUrl.searchParams);


myUrl.searchParams.forEach((key,value) => {
    console.log(key + ": " + value) ;
});