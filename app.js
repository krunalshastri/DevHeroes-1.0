const express = require('express');
const dotEnv = require('dotenv').config();
const User = require('./Models/userModel');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.ATLAS_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use('/dev', require('./Routes/users'));
app.use('/dev', require('./Routes/profile'));
app.use('/dev', require('./Routes/auth'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
