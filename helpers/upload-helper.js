/* Section 12 Lesson 106 - Step 75 */

const path = require('path'); // Step 79

module.exports = {

    uploadDir: path.join(__dirname, '../public/uploads/'), // Step 79

    isEmpty: function(obj){
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                return false;
            }
        }

        return true;

    }

};