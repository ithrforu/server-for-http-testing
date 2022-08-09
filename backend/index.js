const express = require('express');
const app = express();
const cors = require('cors');
const multer  = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __dirname + '/files/')
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.use(cors({
  origin: '*'
}));
app.use(express.text());
app.use(express.urlencoded({ extended: false}));

app.post('/', upload.any(), (req,res) => {
  console.log(req.files, req.body);
  res.json({ message: "Successfully!" });
});

app.get('/', (req, res) => {
  res.send({ message: `You send GET request with: ${req._parsedUrl.query}.` });
});

app.listen(3333);