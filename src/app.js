const express = require('express');
const loginRoutes = require('./routes/login.router');
const userRoutes = require('./routes/users.router');
const categoryRoutes = require('./routes/category.router');
const postRoutes = require('./routes/post.router');
// ...

const app = express();

app.use(express.json());

app.use('/', postRoutes);
app.use('/', loginRoutes);
app.use('/', userRoutes);
app.use('/', categoryRoutes);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
