const express = require('express');
const port = process.env.PORT || '3000';
var app = express();
app.use(express.static(__dirname+'/public'));
app.set('view engine','hbs');

app.use((req,res,next) => {
    res.render('home.hbs');
});
app.get('/',(req,res) => {
    res.send("send");
})
app.get('/bad',(req,res) => {
    res.send({
        "erroMssg":"Bad Request"
    });

});
app.get('/welcome',(req,res) => {
    res.render('home.hbs',{
        "pageTitle":"Bad Request",
        "currentYear":new Date().getFullYear()
    });

})
app.listen(port);