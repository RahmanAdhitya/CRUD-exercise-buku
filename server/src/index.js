const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT;

const { sequelize } = require('./lib/sequelize');
sequelize.sync({ alter: true });

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Buku API</h1>');
});

const { bookRoutes, tagsRoutes, connetionRoutes } = require('./routes');
app.use('/books', bookRoutes);
app.use('/tags', tagsRoutes);
app.use('/connection', connetionRoutes);

app.listen(PORT, () => {
  console.log('running, Listening in port', PORT);
});
