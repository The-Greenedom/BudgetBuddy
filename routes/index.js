const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => {
    // Note: The file extension is not needed when using res.render with a template engine.
    // Express will automatically look for the correct file in the views directory.
    res.render('index', { title: 'BudgetBuddy' });
});

module.exports = router;
