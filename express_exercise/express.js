import express from 'express';
import bodyParser from 'body-parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url)); 
const app = express ();
const port = 3000;
let password_approved = false;

app.listen(port, ()=>{
    console.log("your server has started.")
});

function check4Password(req,res, next){
    if ( req.body['password'] == "nigasaurus" ){
        password_approved = true;
    } else {
        password_approved = false;
    }
    next();
}
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', (req,res)=>{
    res.sendFile(__dirname+ "/index.html");
    console.log(req.rawHeaders);
});

app.use(check4Password);

app.post('/submit_password' , (req,res)=>{
    if (password_approved === true){
        res.send ("whatsuphomie");
    } else{
        res.redirect("/");
    }
});