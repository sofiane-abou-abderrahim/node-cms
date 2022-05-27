// Section 10 Lesson 79 - Step 39 from "app.js"

// Section 10 Lesson 79 Step 39
const express = require("express");
const router = express.Router();
const faker = require("faker"); // Step 71
const Post = require("../../models/Post"); // Step 71
const Category = require("../../models/Category"); // Step 172
const Comment = require("../../models/Comment"); // Step 172
const { userAuthenticated } = require("../../helpers/authentication"); // Step 133

// Section 10 Lesson 80 Step 40
router.all("/*", (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});

// Step 39
router.get("/", (req, res) => {
  // Step 172
  const promises = [
    Post.count().exec(),
    Category.count().exec(),
    Comment.count().exec(),
  ];

  Promise.all(promises).then(([postCount, categoryCount, commentCount]) => {
    res.render("admin/index", {
      postCount: postCount,
      categoryCount: categoryCount,
      commentCount: commentCount,
    });
  });

  // Post.count({}).then((postCount) => {
  //   res.render("admin/index", { postCount: postCount });
  // }); // Step 161
});

// Step 71
router.post("/generate-fake-posts", (req, res) => {
  // res.send('IT WORKS');

  for (let i = 0; i < req.body.amount; i++) {
    let post = new Post();

    post.title = faker.name.title();
    post.status = "public";
    post.allowComments = faker.random.boolean();
    post.body = faker.lorem.sentence();
    post.slug = faker.name.title(); // Step 165
    post.save(function (err) {
      if (err) throw err;
    });
  }
  res.redirect("/admin/posts");
});

// Step 39
module.exports = router;
