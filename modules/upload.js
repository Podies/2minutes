var cloudinary = require('cloudinary');
var config = require('../config.js');

cloudinary.config({ 
  cloud_name: config.cloudinary.cloudName, 
  api_key: config.cloudinary.apiKey, 
  api_secret: config.cloudinary.apiSecret 
});

module.exports = {
  uploadImage: function (data, cb) {
    // cloudinary.uploader.upload
    cloudinary.uploader.upload(data, function(result) { 
      console.log(result);
      cb(result.url);
    });
  }
}