const express = require('express');
const app = express();


app.set('view engine','ejs');

app.use("/assets", express.static("assets"));


require("dotenv").config();

app.get("/",(req,res)=>{
    res.render("index");
  })
  
  

const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server started on ${PORT}`));




