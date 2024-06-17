const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'views' });
});

router.post('/calculate', (req, res) => {
    const expression = req.body.expression;

    try {
        // This is where the vulnerability is introduced
        const result = eval(expression);
        res.sendFile('result.html', { root: 'views' }, (err) => {
            if (err) {
                res.status(500).send(err);
            }
        });
    } catch (error) {
        res.sendFile('error.html', { root: 'views' }, (err) => {
            if (err) {
                res.status(500).send(err);
            }
        });
    }
});

module.exports = router;