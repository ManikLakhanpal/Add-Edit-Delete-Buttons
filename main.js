import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import 'dotenv/config';

const app = express();
const port = process.env.PORT; // CREATE A '.env' file.
const server_url = `http://localhost:${process.env.SERVER_PORT}`;

app.use(express.static('public')); // Tells express to use public folder for static items.

app.get("/", async (req,res) => {
    try {
        const resp = await axios.get(`${server_url}/posts`);
        res.render("home.ejs", {
            data: resp.data[0]
        });
    } catch(err) {
        console.log(err);
        res.send("crash");
    }

})


app.listen(port, () => {
    console.log(`[SERVER] : The server is up and running on ${port}`);
})
