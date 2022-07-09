const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const Handlebars = require("handlebars");
const methodOverride = require("method-override");
const upload = require("express-fileupload");
const session = require("express-session");
const flash = require("connect-flash");
const { mongoDbUrl } = require("./config/database");
const passport = require("passport");

mongoose
  .connect(mongoDbUrl, {})
  .then((db) => {
    console.log("MONGODB connected");
  })
  .catch((error) => console.log(error));

// Using Static

app.use(express.static(path.join(__dirname, "public")));

// Set View Engine

const {
  select,
  generateDate,
  paginate,
} = require("./helpers/handlebars-helpers");

app.engine(
  "handlebars",
  exphbs.engine({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: "home",
    helpers: { select: select, generateDate: generateDate, paginate: paginate },
  })
);
app.set("view engine", "handlebars");

// Upload Middleware

app.use(upload());

// Body Parser

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Method Override

app.use(methodOverride("_method"));

app.use(
  session({
    secret: "abousafwan123ilovecoding",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(flash());

// PASSPORT

app.use(passport.initialize());
app.use(passport.session());

// Local Variables using Middleware

app.use((req, res, next) => {
  res.locals.success_message = req.flash("success_message");
  res.locals.error_message = req.flash("error_message");
  res.locals.user = req.user || null;
  res.locals.error = req.flash("error");
  res.locals.form_errors = req.flash("form_errors");
  next();
});

// Load Routes

const home = require("./routes/home/index");
const admin = require("./routes/admin/index");
const posts = require("./routes/admin/posts");
const categories = require("./routes/admin/categories");
const comments = require("./routes/admin/comments");

// Use Routes

app.use("/", home);
app.use("/admin", admin);
app.use("/admin/posts", posts);
app.use("/admin/categories", categories);
app.use("/admin/comments", comments);

const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
