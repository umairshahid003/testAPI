const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/videosend", (req, res) => {

    const name = req.body;
    // res.send("request: ", req);
    res.send("request body: ", name);
    // res.send("hello world");

})



app.listen(3001, () => {
    console.log("Yey, your server is running on port 3001");
});