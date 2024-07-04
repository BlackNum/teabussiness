const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('./database/database');

app.use(cors());
app.use(express.json());
app.use(cookieParser()); 
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
