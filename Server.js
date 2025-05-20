// const http = require("http");
// const fs = require("fs");
// const url = require("url");



// const server = http.createServer((req, res) => {
//     console.log("Server is activated");

//     const myurl = url.parse(req.url, true);  
//     console.log(myurl);  

//     const log = `${Date.now()}: ${req.url} - New Request\n`;

//     fs.appendFile('Newsn.txt', log, (err) => {
//         if (err) {
//             console.log('Please solve error');
//         } else {
//             console.log('Log appended successfully');
//         }
//     });

//     // Routing
//     switch (myurl.pathname) {
//         case '/':
//             res.end("Homepage");
//             break;

//         case '/about':  
//             const username = myurl.query.myname
//             res.end(`I Am, ${username}`);
//             break;

//             case'search/':
//             const search =myurl.query.search_query
//             res.end("hey would you like play games " + search)
//             break;
//         default:
//             res.end("Hey, This Is Me");
//             break;
//     }
// });

// server.listen(8000, () => console.log('Server Started on port 8000'));

// const fs=require('fs')
// const http=require("http")
// const { parse } = require('path')
// const url=require("url")

// const server=http.createServer((req,res)=>{
//     console.log("Server activated")
// console.log(req)

// const myurl=url.parse(req.url,true);
// console.log('myurl')

//    if(req.url==="/favicon.ico")return res.end();
// console.log(req);
//     const log = `${Date.now()},${req.url}:Request Approved\n`
//     fs.appendFile('newserver.txt',log,(err)=>{
//         if(err){
//             console.log('check proper');
            
//         }else{
//             console.log('File is created');
            
//         }

//         switch (myurl.pathname) {
//             case '/':res.end('Homepage')
                
//                 break;
//                       case '/about':
//                       const name=myurl.query.myname  
//                       res.end(`Hey This is ${name}`)
                
//                 break;
//                     case '/search':
//                       const search=myurl.query.search_query  
//                       res.end('Hey This is'+search)
                
//                 break;
        
//             default:res.end('404 Error Not Found')
//                 break;
//         }
//     })
// })
// server.listen(8000,()=>console.log('Server Activated'));



const http=require("http")
const fs =require('fs')
const url =require("url")
const { request } = require("https")
const server=http.createServer((req,res)=>{
    console.log("createed server")
    console.log('req.headers');
    
    if(req.url==="/favicon.ico") return res.end()
  console.log(req)

    const myurl =url.parse(req.url, true);
console.log(myurl);

    
    const Newlog=`${Date.now()},${req.method},${req.url}:Request Send \n`

    fs.appendFile('Newserver.txt',Newlog,(err)=>{})

    switch (myurl.pathname) {
        case '/':
        if(req.method==='GET')    
        res.end('Homepage')
            
            break;
                 case '/about':
                 const name = myurl.query.myname   
                 res.end(`This is me ${name}`)
                 console.log('name')
            
            break;

            case'/signup':
            if(req.method==='GET') res.end('Please Fill The Form')
                //DB Querry
            else if(req.method==='POST'){
    res.end('Success')
}
                break;
    
        default:res.end('404 Error ')
            break;
    }
})

server.listen(8000,()=>console.log('Activated Server'))