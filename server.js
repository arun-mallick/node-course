const express = require('express');
const port = process.env.PORT || '3000';
var app = express();
app.use(express.static(__dirname+'/public'));
app.set('view engine','hbs');

app.use((req,res,next) => {
    res.render('home.hbs');
    next();
});
app.get('/',(req,res) => {
    res.send("send");
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
app.listen(port);