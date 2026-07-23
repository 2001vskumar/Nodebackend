const http=require('http')
const server=http.createServer((req,res)=>
{
    if(req.url==='/')
    {
    res.end('welcome to home page')
    }
     if(req.url==='/about')
    {
    res.end('welcome to about page')
    }
     if(req.url==='/contact')
    {
    res.end('welcome to contact page')
    }
    res.end(`
       <h1>Oops!</h1>
       <p>we can't seem to find the page you are looking</p>`)
})

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});