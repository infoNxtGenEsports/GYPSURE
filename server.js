const express = require("express")
const path = require("path")

const app = express();
app.use(express.static(__dirname + '/dist/gyp-sure-site'))

app.get('/*',(req,res)=> {
    res.sendFile(__dirname + '/dist/gyp-sure-site/index.html');
    
});

app.listen(8080 || process.env.PORT);