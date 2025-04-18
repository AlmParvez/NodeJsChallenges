const {sumRequestHandler} = require('./sum');
const requestHandler = (req,res)=>{
 console.log(req.url,req.method);

 if(req.url==='/'){
  res.setHeader('Content-Type','text,html')
  res.write(`

    <html>
      <head>
        <title>
          Coding Practise
        </title>
      </head>
      <body>
        <h1>Welcome to Home</h1>
        <a href='./calculator'>Go to calculator</a>
      </body>
    </html>
    
    `);
    return res.end();
 }
 else if(req.url==='/calculator'){
  res.setHeader('Content-Type','text,html')
  res.write(`

    <html>
      <head>
        <title>
          Coding Practise
        </title>
      </head>
      <body>
        <h1>This is calculator</h1>
        <form action="./calculate-result" method="POST">
          <input type="text" placeholder="FirstNumber" name = "num1"/>

          <input type="text" placeholder="SecondNumber" name = "num2"/>

          <input type="submit" value="Sum">
        </form>
      </body>
    </html>
    
    `);
    return res.end();
 }

 else if(req.url==='/calculate-result' && req.method==='POST'){
  console.log("inside calculate-result");
   return sumRequestHandler(req,res);
  //res.end();
  
 }
 
 else{
   res.setHeader('Content-Type','text,html')
  res.write(`

    <html>
      <head>
        <title>
          Coding Practise
        </title>
      </head>
      <body>
        <h1>404 Page not found</h1>
        <a href='./'>Go back</a>
      </body>
    </html>
    
    `);
    return res.end();
 }
};

exports.requestHandler = requestHandler;
