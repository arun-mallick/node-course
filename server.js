const express = require('express');
const port = process.env.PORT || '3000';
var hbs = require('hbs');
var app = express();
//app.use(express.static(__dirname+'/public'));
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getTime',() => {
    return new Date();
});
hbs.registerHelper('upper',(text) => {
    return text.toUpperCase();
});
app.set('view engine','hbs');
app.get('/',(req,res) => {
    res.render('home.hbs',{
        pageTitle:"Handlebars",
        welcomeMsg:"My website"
    });
})
app.get('/help',(req,res) => {
    res.render('help.hbs');
})
app.get('/home',(req,res) => {
    res.render('home.hbs',{
        pageTitle:"Handlebars",
        welcomeMsg:"Welcome to My website"
    });
})

app.listen(port);

















/*
app.use((req,res,next) => {
    res.render('home.hbs');
    next();
});
app.get('/',(req,res) => {
    res.render('home.hbs');
})
app.get('/home',(req,res) => {
    res.render('home.hbs',{
        "pageTitle":"Home",
        "currentYear":new Date().getFullYear()
    });

});
app.get('/help',(req,res) => {
    res.render('help.hbs',{
        "pageTitle":"Help",
        "currentYear":new Date().getFullYear()
    });
})
*/ 