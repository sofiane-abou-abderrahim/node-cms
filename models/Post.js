/* Section 11 Lesson 87 */

const mongoose = require("mongoose"); // Step 56
const Schema = mongoose.Schema; // Step 56
const URLSlugs = require("mongoose-url-slugs"); // Step 162

// Step 56
const PostSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "users",
    }, // Step 147

    // Step 108
    category: {
      type: Schema.Types.ObjectId,
      ref: "categories",
    },

    title: {
      type: String,
      required: true,
    },

    // Step 162
    slug: {
      type: String,
    },

    status: {
      type: String,
      default: "public",
    },

    allowComments: {
      type: Boolean,
      require: true,
    },

    body: {
      type: String,
      require: true,
    },

    // Step 75
    file: {
      type: String,
    },

    // Step 92
    date: {
      type: Date,
      default: Date.now(),
    },

    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "comments",
      },
    ], // Step 134
  },
  { usePushEach: true }
); // Step 136 {usePushEach: true}

PostSchema.plugin(URLSlugs("title", { field: "slug" })); // Step 162

module.exports = mongoose.model("posts", PostSchema); // Step 57
