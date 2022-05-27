// Section 11 - Lesson 83 - Step 49 from "app.js"

const express = require("express");
const router = express.Router();
const Post = require("../../models/Post"); // Step 59
const Category = require("../../models/Category"); // Step 109
const { isEmpty, uploadDir } = require("../../helpers/upload-helper"); // Step 75 + 79
const fs = require("fs"); // Step 79
const { userAuthenticated } = require("../../helpers/authentication"); // Step 133

router.all("/*", userAuthenticated, (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});

router.get("/", (req, res) => {
  // Step 63
  Post.find({})
    .populate("category")
    .then((posts) => {
      // res.send('IT WORKS');
      res.render("admin/posts", { posts: posts }); // Step 62 + 63
    }); // Step 112 populate
});

// Step 148
router.get("/my-posts", (req, res) => {
  Post.find({ user: req.user.id })
    .populate("category")
    .then((posts) => {
      res.render("admin/posts/my-posts", { posts: posts });
    });
});

// Step 53
router.get("/create", (req, res) => {
  Category.find({}).then((categories) => {
    res.render("admin/posts/create", { categories: categories });
  }); // Step 109
});

// Step 55
router.post("/create", (req, res) => {
  // Step 80
  let errors = [];
  if (!req.body.title) {
    errors.push({ message: "Please add a title" });
  }

  // Step 81
  if (!req.body.body) {
    errors.push({ message: "Please add a description" });
  }

  // Step 80
  if (errors.length > 0) {
    res.render("admin/posts/create", {
      errors: errors,
    });
  } else {
    let filename = "https://via.placeholder.com/750x500"; // Step 76

    // Step 75 - req.files.file - Q&A obj.hasOwnProperty is not a function error Lesson 106
    if (!isEmpty(req.files.file)) {
      // Step 74
      let file = req.files.file;
      // filename = file.name; // Take off let - Step 76
      filename = Date.now() + "-" + file.name; // Step 77
      file.mv("./public/uploads/" + filename, (err) => {
        if (err) throw err;
      });

      // console.log("is not empty");
    }
    // console.log(req.files);

    // res.send('WORKED');
    // console.log(req.body); // Step 58

    let allowComments = true; // Step 59

    // Step 59
    if (req.body.allowComments) {
      allowComments = true;
    } else {
      allowComments = false;
    }
    console.log(allowComments);
    // Step 59 + Step 61: const newPost = new Post
    const newPost = new Post({
      user: req.user.id, // Step 147
      title: req.body.title,
      status: req.body.status,
      // allowComments: req.body.allowComments,
      allowComments: allowComments, // Step 60
      body: req.body.body,
      category: req.body.category, // Step 111
      file: filename, // Step 76
    });

    // Step 61
    newPost
      .save()
      .then((savedPost) => {
        // Step 86
        req.flash(
          "success_message",
          `Post ${savedPost.title} was created successfully`
        );

        console.log(savedPost);
        res.redirect("/admin/posts");
      })
      .catch((error) => {
        console.log("Could not save post: " + error);
      });
  } // else Step 80

  // console.log(req.body.allowComments);
});

// Step 64
router.get("/edit/:id", (req, res) => {
  // Step 65
  Post.findOne({ _id: req.params.id }).then((post) => {
    Category.find({}).then((categories) => {
      res.render("admin/posts/edit", { post: post, categories: categories });
    }); // Step 110
  });

  // res.send(req.params.id);
  // res.render('admin/posts/edit');
});

// POST UPDATING

// Step 68
router.put("/edit/:id", (req, res) => {
  // res.send('IT WORKS');

  // Step 69
  Post.findOne({ _id: req.params.id }).then((post) => {
    if (req.body.allowComments) {
      allowComments = true;
    } else {
      allowComments = false;
    }

    post.user = req.user.id; // Step 147
    post.title = req.body.title;
    post.status = req.body.status;
    post.allowComments = allowComments;
    post.body = req.body.body;
    post.category = req.body.category; // Step 111

    // Step 88
    if (!isEmpty(req.files.file)) {
      let file = req.files.file;
      filename = Date.now() + "-" + file.name;
      post.file = filename;
      file.mv("./public/uploads/" + filename, (err) => {
        if (err) throw err;
      });
      // console.log("is not empty");
    }

    post.save().then((updatedPost) => {
      // Step 89
      req.flash("success_message", "Post was successfully updated");

      res.redirect("/admin/posts/my-posts"); // Step 149 "my-posts"
    });
  });
});

// Step 70
router.delete("/:id", (req, res) => {
  // Post.remove({_id: req.params.id})
  // Post.deleteOne({_id: req.params.id}) // Q&A Warning: collection.remove is deprecated - Lesson 100
  Post.findOne({ _id: req.params.id })
    .populate("comments") // Step 141
    // Step 79
    /* .then(result=>{ */
    .then((post) => {
      // Step 79
      // Step 79
      fs.unlink(uploadDir + post.file, (err) => {
        // console.log(post.comments); // Step 141

        // Step 141
        if (!post.comments.length < 1) {
          post.comments.forEach((comment) => {
            comment.remove();
          });
        }

        post.remove().then((postRemoved) => {
          // Step 90
          req.flash("success_message", "Post was successfully deleted");
          res.redirect("/admin/posts/my-posts"); // Step 149 "my-posts"
        }); // Step 141
      });
    });
});

module.exports = router; // Section 11 - Lesson 83 - Step 49
