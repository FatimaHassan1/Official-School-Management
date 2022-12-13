const moment = require("moment");
const { query, response } = require("express");
const { v4: uuidv4 } = require("uuid");
const sharp = require("sharp");

module.exports.RENDER_BAD_REQUEST = (res, error) => {
  console.log(error);
  if (error.message) {
    res.status(400).json({
      message: "Some thing went wrong, Please Contact Support",
    });
  } else {
    res.status(400).send(error);
  }
};

module.exports.UPLOAD_AND_RESIZE_FILE = async (
  image_buffer_data,
  dir,
  image_size
) => {
  const myPromise = new Promise(async (resolve, reject) => {
    try {
      let image_name = uuidv4() + ".jpeg";
      await sharp(image_buffer_data)
        .jpeg({
          quality: 100,
          chromaSubsampling: "4:4:4",
        })
        .resize(image_size)
        .toFile(dir + image_name, async (err, info) => {
          if (err) resolve(false);
        });
      resolve(image_name);
    } catch (error) {
      console.log(error, "error in uploading");
      resolve(false);
    }
  });

  return myPromise;
};
