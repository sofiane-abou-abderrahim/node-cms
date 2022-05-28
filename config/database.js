if (process.env.NODE_ENV === "production") {
  module.exports = require("./prd-database");
} else {
  module.exports = require("./dev-database");
}
