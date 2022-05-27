/* Step 135 */

const express = require("express");
const router = express.Router();
const Post = require("../../models/Post"); // Step 136
const Comment = require("../../models/Comment"); // Step 136
const { userAuthenticated } = require("../../helpers/authentication");

router.all("/*", userAuthenticated, (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
}); // Step 137

router.get("/", (req, res) => {
  Comment.find({ user: "62891f0bbad2cede5975323b" }) // Step 142 + Step 152
    .populate("user") // Step 139
    .then((comments) => {
      res.render("admin/comments", { comments: comments });
    }); // Step 138
}); // Step 137

router.post("/", (req, res) => {
  Post.findOne({ _id: req.body.id }).then((post) => {
    const newComment = new Comment({
      user: req.user.id,
      body: req.body.body,
    });
    post.comments.push(newComment);
    post.save().then((savedPost) => {
      newComment.save().then((savedComment) => {
        req.flash(
          "success_message",
          "Your comment will be reviewed in a moment"
        ); // Step 159
        res.redirect(`/post/${post.id}`);
      });
    });
  }); // Step 136
  // res.send("IT WORKS");
});

router.delete("/:id", (req, res) => {
  Comment.remove({ _id: req.params.id }).then((deleteItem) => {
    Post.findOneAndUpdate(
      { comments: req.params.id },
      { $pull: { comments: req.params.id } },
      (err, data) => {
        if (err) console.log(err);
        res.redirect("/admin/comments");
      }
    ); // Step 143
  });
}); // Step 140

// Step 153
router.post("/approve-comment", (req, res) => {
  // res.send("IT WORKS");

  // Step 155
  Comment.findByIdAndUpdate(
    req.body.id,
    { $set: { approveComment: req.body.approveComment } },
    (err, result) => {
      if (err) return err;

      res.send(result);
    }
  );
});

module.exports = router;
