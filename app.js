// import express from "express";
// import bodyParser from "body-parser";
// import cookieParser from "cookie-parser";
// import multer from "multer";
// import session from "express-session";

const express = require("express");
// const cookieParser = require("cookie-parser");
// const multer = require("multer");
// const session = require("express-session");
const route = require("./routes");

const app = express();
const port = 3001;

// Parse application/json
app.use(express.json());
// app.use(express.urlencoded());

app.use(route)

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
});