import express, { response } from 'express';
import pg from 'pg';
import fs from 'fs'
import dotenv from "dotenv"; 

const app = express(); 
const {Pool} = pg;

let PORT = process.env.PORT
if(PORT == null || PORT =='') PORT = 8000; 

// const pool = new Pool({
//     database: '',

// }); 

app.use(express.json());



app.get('/', (req, res) => {
    res.writeHead(200, {
        'Content-Type' : 'text/html'
    })
   
    fs.readFile("index.html", (err, data) => {
        res.write(data)
    })

});
  

app.use((err, req, res, next) => {
    res.sendStatus(500)
  }); 
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
}); 