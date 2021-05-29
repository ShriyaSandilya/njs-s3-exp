const express = require('express');
const app = express();

app.get('/number', (req, res) => {
    res.send('Go to ''/number/:num'' to check if :num is odd or even');
})

app.get('/number/:num' , (req, res) => {
    param = req.params;
    if (param['num'] %2 == 0){
        res.send(`The number ${param['num']} is even`)
    }
    else{
        res.send(`The number ${param['num']} is odd`)
    }
})

app.listen(5000, () => console.log('Running'))
