const dotenv = require('dotenv');
dotenv.config();

// Exporting env variable
module.exports = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
};


cloudinary.config({ 
  cloud_name: 'compassiondaisy', 
  api_key: '513766762624921', 
  api_secret: 'PcJZifdaipjT5pQIckTKEkedfp8' 
});