const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const { getCurrentTime } = require('./controllers/timeController');

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/time', getCurrentTime);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
