const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const db = require("./data/dbConfig.js");

const indexRouter = require("./routes/index.js");
const usersRouter = require("./routes/users.js");
const bikesRouter = require("./routes/bikes.js");
const changesRouter = require("./routes/changes.js");
const authRouter = require("./routes/auth.js");
const restricted = require("./middleware/restricted.js");

const app = express();

// serve static files from react
app.use(express.static(path.join(__dirname, "client/build")));

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", restricted, usersRouter);
app.use("/api/bikes", restricted, bikesRouter);
app.use("/api/changes", restricted, changesRouter);

// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
  console.log(err);
});

module.exports = app;
