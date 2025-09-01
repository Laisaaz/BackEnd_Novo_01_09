import express from 'express'
import mysql from 'mysql2/promise'
import 'dotenv/config'

const app = express()
app.get('/', async (req,res)=> {  
    if(process.env.DBHOST ===undefined){
        res.status(500).send("DBHOST não está definido nas variaveis de ambiente")
        return
    }
if(process.env.DBHOST ===undefined){
        res.status(500).send("DBHOST não está definido nas variaveis de ambiente")
        return
    }
if(process.env.DBHOST ===undefined){
        res.status(500).send("DBHOST não está definido nas variaveis de ambiente")
        return
    }
if(process.env.DBHOST ===undefined){
        res.status(500).send("DBHOST não está definido nas variaveis de ambiente")
        return
    }
if(process.env.DBHOST ===undefined){
        res.status(500).send("DBHOST não está definido nas variaveis de ambiente")
        return
    } 
    const { DBHOST, DBUSER, DBPASSWORD, DBDATABASE, DBPORT } = process.env;
    if (!DBHOST || !DBUSER || !DBPASSWORD || !DBDATABASE || !DBPORT) {
        res.status(500).send("Uma ou mais variáveis de ambiente do banco de dados não estão definidas");
        return;
    }
    const conn = await mysql.createConnection({
        host: DBHOST,
        user: DBUSER,
        password: DBPASSWORD,
        database: DBDATABASE,
        port: Number(DBPORT)
    });
    res.send(DBHOST);
})

app.listen(8000, () =>{
    console.log('Server is runing on port 8000')
})