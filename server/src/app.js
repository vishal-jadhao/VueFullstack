const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('combined'));
app.use(bodyparser.json());
app.use(cors());

// End points

app.get('/status', (req, res) => {
    res.sendStatus(200);
});

app.listen(process.env.PORT || 8085, () => {
    console.log('server started');
});