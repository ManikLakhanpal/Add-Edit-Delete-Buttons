import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import "dotenv/config";

const app = express();
const port = process.env.SERVER_PORT;

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
});

db.connect();

app.get('/posts', async(req, res) => {
    try {
        const data = await db.query("SELECT * FROM msg");
        console.log(data.rows);
        res.send(data.rows); 
    } catch (err) {
        console.log(err);
        res.sendStatus(404);
    }

});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`[SERVER] : The database is online and running on ${port}`);
})