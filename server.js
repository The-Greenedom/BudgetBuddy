const express = require('express');
const indexRouter = require('./routes-budgetbuddy/index');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/', indexRouter);

app.get('/', (req, res) => {
    res.send('Welcome to BudgetBuddy!');
});

app.listen(port, () => {
    console.log(`BudgetBuddy is running on port ${port}`);
});
