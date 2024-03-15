import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import 'dotenv/config';

const app = express();
const port = process.env.PORT; // CREATE A '.env' file.

app.use(express.static('public')); // Tells express to use public folder for static items.

app.get("/", (req,res) => {
    res.render("home.ejs");
})


app.listen(port, () => {
    console.log(`[SERVER] : The server is up and running on ${port}`);
})
