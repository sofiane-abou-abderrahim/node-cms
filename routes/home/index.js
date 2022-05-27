// Section 10 - Lesson 78 - Step 29 from "app.js"

const express = require("express"); // Section 10 - Lesson 78 - Step 33 from "app.js"
const router = express.Router(); // Section 10 - Lesson 78 - Step 34 from "app.js"
const Post = require("../../models/Post"); // Step 94
const Category = require("../../models/Category"); // Step 107
const User = require("../../models/User"); // Step 115
const bcrypt = require("bcryptjs"); // Step 118
const passport = require("passport"); // Step 126
const LocalStrategy = require("passport-local").Strategy; // Step 126

// Section 10 Lesson 81 Step 45
router.all("/*", (req, res, next) => {
  req.app.locals.layout = "home";
  next();
});

// Section 10 - Lesson 78 - Step 30 from "app.js"
// Step 8
// app.get('/', (req, res)=>{
// // res.send('it works');
// res.render('home/index'); // Step 13
// });

// // Step 19
// app.get('/about', (req, res)=>{
// res.render('home/about');
// });

// // Step 27
// app.get('/login', (req, res)=>{
// res.render('home/login');
// });

// // Step 28
// app.get('/register', (req, res)=>{
// res.render('home/register');
// });

// Section 10 - Lesson 78 - Step 35 from "app.js"
router.get("/", (req, res) => {
  // res.send('it works');

  // Step 167
  const perPage = 10;
  const page = req.query.page || 1;

  // Step 94
  Post.find({})

    // Step 167
    .skip(perPage * page - perPage)
    .limit(perPage)

    .then((posts) => {
      // Step 167
      Post.count().then((postCount) => {
        Category.find({}).then((categories) => {
          res.render("home/index", {
            posts: posts,
            categories: categories,
            current: parseInt(page),
            pages: Math.ceil(postCount / perPage),
          }); // Step 13 + Step 94 + Step 107 + Step 167 current + pages
        }); // Step 107
      });
    });

  // Step 85
  // req.session.abousafwan = "Abou Safwan";
  // if (req.session.abousafwan) {
  //   console.log(`We found ${req.session.abousafwan}`);
  // }
});

// Step 19
router.get("/about", (req, res) => {
  res.render("home/about");
});

// Step 27
router.get("/login", (req, res) => {
  res.render("home/login");
});

// APP LOGIN

// Step 127
passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    // console.log(password);
    console.log(email);

    // Step 128
    User.findOne({ email }).then((user) => {
      if (!user) return done(null, false, { message: "NO USER FOUND" });
      // user.testMethod();
      bcrypt.compare(password, user.password, (err, matched) => {
        if (err) return err;
        if (matched) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect password" });
        }
      });
    });
  })
);

// Step 129
passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// Step 124
router.post("/login", (req, res, next) => {
  // Step 126
  passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login",
    failureFlash: true,
  })(req, res, next);
  // res.send("LOGIN POST WORKS");
});

// Step 131
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

// Step 28
router.get("/register", (req, res) => {
  res.render("home/register");
});

// Step 115
router.post("/register", (req, res) => {
  // Step 116
  let errors = [];

  if (!req.body.firstName) {
    errors.push({ message: "Please enter your first name" });
  }

  if (!req.body.lastName) {
    errors.push({ message: "Please enter your last name" });
  }

  if (!req.body.email) {
    errors.push({ message: "Please enter your email" });
  }

  if (!req.body.password) {
    errors.push({ message: "Please enter your password" });
  }

  if (!req.body.passwordConfirm) {
    errors.push({ message: "Please confirm your password" });
  }

  if (req.body.password !== req.body.passwordConfirm) {
    errors.push({ message: "Password fields don't match" });
  }

  if (errors.length > 0) {
    res.render("home/register", {
      errors: errors,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    }); // Step 121 - firstnName, lastName, email
  } else {
    //Step 122
    User.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        // Step 117
        const newUser = new User({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
        });

        // Step 118
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            newUser.password = hash; // Step 119

            // Step 117
            newUser.save().then((savedUser) => {
              // res.send("USER WAS SAVED");
              req.flash(
                "success_message",
                "You are now registered, please login"
              ); // Step 120
              res.redirect("/login"); // Step 119
            });
            // console.log(hash);
          });
        });
      } else {
        req.flash("error_message", "This email exists, please login");
        res.redirect("/login");
      }
    }); // Step 122

    // res.send("DATA WAS GOOD");
  }
});

// Step 96
router.get("/post/:slug", (req, res) => {
  Post.findOne({ slug: req.params.slug })
    .populate({
      path: "comments",
      match: { approveComment: true },
      populate: { path: "user", model: "users" },
    }) // Step 145 + Step 146 + match Step 158
    .populate("user") // Step 147
    .then((post) => {
      Category.find({}).then((categories) => {
        res.render("home/post", { post: post, categories: categories });
      }); // Step 107
    });
}); // Step 164 changed id by slug

module.exports = router; // Section 10 - Lesson 78 - Step 36
