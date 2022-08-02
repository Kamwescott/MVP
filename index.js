import express from 'express';
import pg from 'pg';
import dotenv from "dotenv"; 

const app = express()
const PORT = process.env.PORT;
const {Pool} = pg;

// const pool = new Pool({
//     database: '',

// }); 

app.use(express.json());

app.get("https://wescott-mvp-app.herokuapp.com/", (req, res) => {
    res.send('hello')
})

app.use((err, req, res, next) => {
    res.sendStatus(500)
  }); 
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
}); 