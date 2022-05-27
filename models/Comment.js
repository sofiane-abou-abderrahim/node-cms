/* Step 134  */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },

  body: {
    type: String,
    required: true,
  },

  approveComment: {
    type: Boolean,
    default: false,
  }, // Step 151 + false Step 158

  date: {
    type: Date,
    default: Date.now(),
  }, // Step 138
});

module.exports = mongoose.model("comments", CommentSchema);
