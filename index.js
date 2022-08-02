import express from 'express';
import pg from 'pg';

const app = express()
const PORT = 8080;
const {Pool} = pg;

// const pool = new Pool({
//     database: '',

// }); 

app.use(express.json());


app.use((err, req, res, next) => {
    res.sendStatus(500)
  }); 
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
}); 