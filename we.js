const http = require("http");

const requests = require('requests');
const fs = require("fs");
const homefile= fs.readFileSync("we.html","utf-8");
const replaceval =(tempval,orgval)=>{
  let temperature = tempval.replace('{%temperature%}',orgval.main.temp);
temperature= temperature.replace('{%max_temp%}',orgval.main.temp_max);
temperature= temperature.replace('{%min_temp%}',orgval.main.temp_min);
temperature= temperature.replace('{%country%}',orgval.sys.country);
temperature= temperature.replace('{%location%}',orgval.name);
return temperature;
}
const server = http.createServer((req,res)=>{
if(req.url==("/")){
    requests('http://api.openweathermap.org/data/2.5/weather?q=bera&appid=1b251cba26d30382343d6fc676f09b59&units=metric')
.on('data', (chunk)=> {
   var objdata= JSON.parse(chunk);
  var arrdata = [objdata];
  const realtimedata= arrdata.map((val)=> replaceval(homefile,val)).join("");
  
  res.write(realtimedata);
  

})
.on('end', (err)=> {
  if (err) return console.log('connection closed due to errors', err);
 res.end()
  
});
}
});

server.listen(3000,"127.0.0.1");