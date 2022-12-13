// import modules
const express = require("express");
const { json, urlencoded } = express;
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
const bodyParser = require("body-parser");


// app
const app = express();

// db
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB CONNECTED"))
	.catch((err) => console.log("DB CONNECTION ERROR", err));

// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// routes

const userRoutes = require("./routes/lietotajs");
app.use("/", userRoutes);

const produktiRoutes = require('./routes/produkti');
app.use('/prod', produktiRoutes)

// port
const port = process.env.PORT || 8080

// listener
const server = app.listen(port, () => {console.log("Server started!")})