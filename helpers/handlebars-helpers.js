/* Section 11 Lesson 96 - Step 66 */

const moment = require("moment"); // Step 92

module.exports = {
  select: function (selected, options) {
    // Step 66 + 67

    return options
      .fn(this)
      .replace(
        new RegExp(' value="' + selected + '"'),
        '$&selected="selected"'
      ); // Step 67
  },

  // Step 92
  generateDate: function (date, format) {
    return moment(date).format(format);
  },

  // Step 166 + Step 168 + Step 169 + Step 170 + Step 171
  paginate: function (options) {
    let output = "";
    if (options.hash.current === 1) {
      output += `<li class="page-item disabled"><a class="page-link">First</a></li>`;
    } else {
      output += `<li class="page-item"><a href="?page=1" class="page-link">First</a></li>`;
    }

    let i =
      Number(options.hash.current) > 5 ? Number(options.hash.current) - 4 : 1;

    if (i !== 1) {
      output += `<li class="page-item disabled"><a class="page-link">...</a></li>`;
    }

    for (
      ;
      i <= Number(options.hash.current) + 4 && i <= options.hash.pages;
      i++
    ) {
      if (i === options.hash.current) {
        output += `<li class="page-item active"><a class="page-link">${i}</a></li>`;
      } else {
        output += `<li class="page-item "><a href="?page=${i}" class="page-link">${i}</a></li>`;
      }

      if (i === Number(options.hash.current) + 4 && i < options.hash.pages) {
        output += `<li class="page-item disabled"><a class="page-link">...</a></li>`;
      }
    }

    if (options.hash.current === options.hash.pages) {
      output += `<li class="page-item disabled"><a class="page-link">Last</a></li>`;
    } else {
      output += `<li class="page-item "><a href="?page=${options.hash.pages}" class="page-link">Last</a></li>`;
    }

    return output;
  },
};
