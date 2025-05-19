
const http = require("http");
const fs =require("fs");
const url=require('url')

const server = http.createServer((req, res) => {


 
//   console.log('Server Activated');\ 

// console.log(req.headers); show system and clint information to server

   if(req.url==="/favicon.ico")return res.end();
console.log(req);
const log=`${Date.now()}: ${req.url} New Request Recived \n `

//create urlpath
const myurl=url.parse(req.url,true)
console .log(myurl)

fs.appendFile('Log.txt',log,(err,data)=>{

    //Switch Statement
// switch (req.url) {
//     case '/':res.end('Homepage');
        
//         break;
// case'/about':res.end('I Am SN Naitam');
// break;


//     default:res.end('404 Not Found')
//         break;
// }



switch (myurl.pathname) {
    case '/':res.end('Homepage');
        
        break;
case'/about':
const username=myurl.query.myname;

res.end(`I Am, ${username}`);
break;


case'/search':
const search = myurl.query.search_query;
res.end("Hey, there! Are you bro? Hello " + search);

break;

    default:
        res.end('404 Not Found')
        break;
}

})

 
});

server.listen(8000, () => console.log('Server Started'));
