import express from "express";
const app = express();
import bodyParser from "body-parser";
const port = 3000;
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));
var name;

function bandNameGenerator(req,res,next){
     name = req.body["cityname"] + req.body["curseword"] ;
    next();
}




app.listen(port, (req, res)=>{
    console.log("Your server has started on port 3000");
});

app.get ("/", (req, res)=>{
    console.log(req.rawHeaders);

    res.sendFile(__dirname  +  "/index.html")
});

app.use(bandNameGenerator);

app.post ("/login", (req,res)=>{
    // res.sendStatus(201);
    console.log(req.body);
    res.send(`<h1>ok ${name}</h1>`);
});

app.put ("/Ali", (req,res)=>{
    res.sendStatus(400);
});

app.patch ("/Ali", (req,res)=>{
    res.sendStatus(400);
});


app.delete ("/Ali", (req,res)=>{
    res.sendStatus(400);
});
