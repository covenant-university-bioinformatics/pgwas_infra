import express from "express";

const app = express();

app.use('/results/pv/analysis', express.static('/pv/analysis', {index: false}));

app.listen(3000, () => {
    console.log("Serve Static");
    console.log("Listening on 3000");
});