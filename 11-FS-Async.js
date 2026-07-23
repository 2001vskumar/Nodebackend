const {readFile,writeFile}=require('fs')

const first=readFile('./content/first.txt','utf8',(err,result)=>{
       if(err){
              return;
       }
       console.log(result)
})

const second=readFile('./content/second.txt','utf8',(err,result)=>{
       if(err){
              return;
       }
       console.log(result)
})
writeFile('./content/result-async.txt',`here is the result: ${first}, ${second}`,(err,result)=>{
       if(err){
              return;
       }
       console.log(result)
}
)




