const express = require('express');
const path = require('path');
const calculatorRouter = require('./routes/calculator');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', calculatorRouter);

app.listen(port, () => {
    console.log(`Calculator app listening at http://localhost:${port}`);
});

