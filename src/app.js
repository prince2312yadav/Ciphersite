const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const viewPath=(path.join(__dirname,'../templates/views'));
const partialPath=(path.join(__dirname,'../templates/partials'));
app.use(express.static(path.join(__dirname,'../public')));
const port=process.env.PORT||3000;
app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialPath);
app.get('',(req,res)=>{
    res.render('main',{})
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/team',(req,res)=>{
    res.render('team2')
})
app.get('/event',(req,res)=>{
    res.render('event')
})
app.get('/blog',(req,res)=>{
    res.render('blog')
})
app.get('/glitch', (req, res) => {
    res.render('glitch');
})

app.get('*',(req,res)=>{
    res.render('404page');
})
app.listen(port,()=>{
    console.log('server running')
})
















