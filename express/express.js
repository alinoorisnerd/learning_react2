import express from "express";
const app = express();
const port = 3000;
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

app.listen(port, (req, res)=>{
    console.log("Your server has started on port 3000");
});

app.get ("/", (req, res)=>{
    console.log(req.rawHeaders);
    res.sendFile(__dirname  +  "/index.html")
});


app.post ("/Ali", (req,res)=>{
    res.sendStatus(400);
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
