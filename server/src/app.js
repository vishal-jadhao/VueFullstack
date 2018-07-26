const express = require('express');
const bodyparser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('combined'));
app.use(bodyparser.json());
app.use(cors());

// End points

app.post('/register', (req, res) => {    
    const email = req.body.email;
    res.send({
        message: `Hello ${email}! You have registered. Have Fun!`
    })
});

app.listen(process.env.PORT || 8085, () => {
    console.log('server started');
});