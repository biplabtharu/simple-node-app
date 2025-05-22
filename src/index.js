import express from "express"
const app = express();

app.get("/", (req,res) =>{
    res.json("FROM EXPRESS");
})  

app.listen(3002, ()=>{
    console.log("listening at 3002");
})