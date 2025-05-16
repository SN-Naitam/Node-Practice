const { isUtf8 } = require("buffer");
const { log } = require("console")
const fs =require("fs")


//Show to cpu information to system on usage of threads my  cpus 4 to my threads only use 4 to syncrones and blocking Operation
const os=require('os')
console.log(os.cpus().length)



// this is syncrones (create,read,rename)

//scrones create
    // fs.writeFileSync('./Createworld.txt','Hey Everyone I Am Back')

    //syncrones read
        // const result =fs.readFileSync('./Create.text','utf-8')
    // console.log(result);

    // syncrones Rename
// fs.renameSync('./Createworld.txt','./CreatNewWorld')
            //this is asyncrones method
            //create file
            //  fs.writeFile('./Create.text',"create file asyncrones",(err)=>{})


                 //Read File
    //this is asyncronous 
    // fs.readFile('./Create.text',"utf-8",(err,result)=>{
    //     if(err){
    //         console.log('err','Reading not response')
    //     }else{

    //         console.log(result);
            
    //     }
    // })

    //Rename File
// fs.rename('./Tmt.js','FIleRename.text',(err)=>{})


    //asyncrones file append to put data
// fs.appendFile('./Create.txt', 'Hello There \n', (err) => {
//     if (err) {
//         console.log('Could not append data');
//     } else {
//         console.log('Data appended successfully');
//     }
// });


    // append file sync
    // fs.appendFileSync('./CreatNewWorld','Helloworld'/n,new Date().getDate().toLocaleString())
//     fs.appendFileSync('./CreateNewWorld.txt',`${Date.now()}\nHelloworld\n`)


// // copy file fs
//     fs.copyFile('./Create.txt','./Copy.txt',(err)=>{
//         if(err){
//             consoel.log('file is not copy')
//         }else if (!err){
//             console.log ('file is  copy')
//         }
//     })


//Unlink File To Asyncrones
    // fs.unlink('./Sn.txt',(err)=>{
    //     if(err){
    //         console.log('Not deleted file')
    //     }else if(!err){
    //         console.log('successfully deleted')
    //     }
    // })




    // stat show to full details on file 
//    console.log( fs.statSync('./Arthimatic.js'))


