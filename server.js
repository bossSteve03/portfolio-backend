const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
const app = express();
require('dotenv').config();

app.use(bodyParser.json());

// Use API routes
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
