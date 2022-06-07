const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1 style="color:red"> hello world </h1>');
});

const port = 3000;
app.listen(port, () => {
    console.log(`application running on port ${port}`);
});
