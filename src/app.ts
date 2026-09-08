import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to service!");
});

export default app;
