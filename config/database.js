/* Step 123 */

// module.exports = {
//   mongoDbUrl:
//     "mongodb+srv://Com4Muz:ejgwlPjS7onYjSZM@localhost.8urmd.mongodb.net/cms",
// };

// Step 176
if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod-database");
} else {
  module.exports = require("./dev-database");
}
