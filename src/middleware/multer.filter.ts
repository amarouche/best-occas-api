export const imageFileFilter = (req, file, callback) => {
  if (!file.originalname.match(/\.(JPG|jpg|jpeg|png|gif)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};


const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

export const multerStorage = {
  destination: (req, file, callback) => {
      callback(null, 'files');
  },
  filename: (req, file, callback) => {
      // const name = 'test';
      const extension = MIME_TYPES[file.mimetype];
      callback(null,  Math.random().toString(36).substring(2, 15) + Date.now() + '.' + extension);
  }
};
