const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.post('/calculate', (req, res) => {
    const expression = req.body.expression;

    try {
        const result = eval(expression);
        const resultHtml = fs.readFileSync(path.join(__dirname, '../views/result.html'), 'utf8')
            .replace('<%= result %>', result);
        res.send(resultHtml);
    } catch (error) {
        const errorHtml = fs.readFileSync(path.join(__dirname, '../views/error.html'), 'utf8')
            .replace('<%= error.message %>', error.message);
        res.send(errorHtml);
    }
});

module.exports = router;