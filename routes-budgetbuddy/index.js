const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index'); // Assuming you have a view called 'index'
});

module.exports = router;
