const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
    console.log("Server is activated");

    const myurl = url.parse(req.url, true);  
    console.log(myurl);  

    const log = `${Date.now()}: ${req.url} - New Request\n`;

    fs.appendFile('Newsn.txt', log, (err) => {
        if (err) {
            console.log('Please solve error');
        } else {
            console.log('Log appended successfully');
        }
    });

    // Routing
    switch (myurl.pathname) {
        case '/':
            res.end("Homepage");
            break;

        case '/about':  
            const username = myurl.query.myname
            res.end(`I Am, ${username}`);
            break;

            case'search/':
            const search =myurl.query.search_query
            res.end("hey would you like play games " + search)
            break;
        default:
            res.end("Hey, This Is Me");
            break;
    }
});

server.listen(8000, () => console.log('Server Started on port 8000'));
