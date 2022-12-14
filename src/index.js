const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const users = require('./routes/users');
const projects = require('./routes/projects');
const events = require('./routes/events');

const { database } = require('./config');

const app = express();
const port = process.env.PORT || 3001;

(async () => {

})();

mongoose.connect(database)
  .then(() => console.log('connected to mongodb'))
  .catch((error) => console.log(error));

//  middleware
app.use(express.json());
app.use(cors());
app.use('/api/users', users);
app.use('/api/projects', projects);
app.use('/api/events', events);

app.listen(port, () => {
  console.log('Runing in port:', port);
});
