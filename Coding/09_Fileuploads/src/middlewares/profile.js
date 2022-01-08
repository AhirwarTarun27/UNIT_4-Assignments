const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../profile_pics"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.fieldname);
  },
});

function fileFilter(req, file, cb) {
  // The function should call `cb` with a boolean
  // to indicate if the file should be accepted

  if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
    // To accept the file pass `true`, like so:
    cb(null, true);
  } else {
    // To reject this file pass `false`, like so:
    cb(null, false);
  }
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
});

const profilePic = (fieldName) => {
  return (req, res, next) => {
    const uploadItem = upload.single(fieldName);

    uploadItem(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        res.send({ message: err.message, errorType: "MulterError" });
      } else if (err) {
        // An unknown error occurred when uploading.
        res.send({ message: err.message, errorType: "NormalError" });
      }

      // Everything went fine.
      next();
    });
  };
};

module.exports = { profilePic };
