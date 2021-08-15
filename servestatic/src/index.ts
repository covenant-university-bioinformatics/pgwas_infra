import express from "express";

const app = express();

app.use('/results', express.static('/pv/analysis'));

app.listen(3000, () => {
    console.log("Serve Static");
    console.log("Listening on 3000");
});