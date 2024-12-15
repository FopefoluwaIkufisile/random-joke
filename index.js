import express from "express"
import bodyParser from "body-parser";
import axios from "axios";

const END_URLforrandom = "/Any?type=twopart"
const BASE_URL = "https://v2.jokeapi.dev/joke"
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.render("index.ejs", {joke:null})
})

app.get("/joke", async(req,res)=>{
    try{
        const response = await axios.get(BASE_URL + END_URLforrandom);
        console.log(response.data.setup);
        console.log(response.data.delivery);
        res.render("index.ejs", {joke: response.data})
    }
    catch(error){
 res.render("index.ejs", error.result.data)
    }
 
})

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
})
