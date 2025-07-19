import express from "express";
const app = express();
const port = 3000;

app.listen(port, (req, res)=>{
    console.log("Your server has started on port 3000");
});

app.get ("/", (req, res)=>{
    console.log(req.rawHeaders);
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
