//Function that helps find the path to the root file

const path = require('path');

module.exports = path.dirname(process.mainModule.filename);