const multer  = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../data"))
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, Date.now() + '-' + file.originalname)
    }
  })

  const fileFilter = (req, file, cb) => {
    if(file.mimtype == "application/pdf" || file.mimetype == "image/jpeg"){
      cb(null, true)
    }
    else{
      cb(null, false)
    }
  }

  const upload = multer({storage : storage})


  module.exports = upload;
  