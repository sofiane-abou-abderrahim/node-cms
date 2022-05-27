// Step 98

const express = require("express");
const router = express.Router();
const Category = require("../../models/Category"); // Step 98
const { userAuthenticated } = require("../../helpers/authentication"); // Step 133

router.all("/*", (req, res, next) => {
  req.app.locals.layout = "admin";
  next();
});

router.get("/", (req, res) => {
  Category.find({}).then((categories) => {
    res.render("admin/categories/index", { categories: categories }); // Step 98 + Step 102
  }); // Step 102
});

router.post("/create", (req, res) => {
  const newCategory = Category({
    name: req.body.name,
  });
  newCategory.save().then((savedCategory) => {
    res.redirect("/admin/categories");
  });
}); // Step 101

router.get("/edit/:id", (req, res) => {
  Category.findOne({ _id: req.params.id }).then((category) => {
    res.render("admin/categories/edit", { category: category });
  });
}); // Step 104

router.put("/edit/:id", (req, res) => {
  Category.findOne({ _id: req.params.id }).then((category) => {
    category.name = req.body.name;
    category.save().then((savedCategory) => {
      res.redirect("/admin/categories");
    });
  });
}); // Step 105

router.delete("/:id", (req, res) => {
  Category.remove({ _id: req.params.id }).then((result) => {
    res.redirect("/admin/categories");
  });
}); // Step 106

module.exports = router;
