const express = require('express');
const app = express();
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const { setMaxListeners } = require('events');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ezppay_db',
});
const [a,sseta]= useState([''])

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/userlogin/',(req, res)=>{

    const loginid = req.body.loginid;
    db.query("SELECT Password FROM user_login where loginid = ? ;",[loginid],(err,result)=>{
   if(err)  
        {
            res.send({err:err})
        }
        if(result.length > 0)
        {
            res.send({messge: 'user found'})
        }
    else if(result.length == 0) {
        
        res.send({message:"No user found"})
    }
});
});
