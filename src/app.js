const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const hbs = require("hbs");
// const html = fs.readFileSync("../public/index.html","utf-8");
const port = process.env.PORT ||  8000;
 const staticpath = path.join(__dirname,"../public")
app.use(express.static("public"))
app.set("view engine", "hbs");
const template_path = path.join(__dirname,'../templates/views')
const partials_path = path.join(__dirname,'../templates/partials')
app.set('views',template_path)
hbs.registerPartials(partials_path)
app.get("/",(req,res)=>{
    res.render('index');
})
app.get("/about",(req,res)=>{
    res.render('about')
})
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get("*",(req,res)=>{
    res.render("404")
})
app.listen(port,()=>{
    console.log('listening');
})