var port = process.env.PORT || 3000;
const express = require('express');
const axios = require('axios');

const app = express();

app.get('/ip/:ip/country', async function (req, res) {

    let response = await axios.get('https://api.ip2country.info/ip?' + req.params.ip);

    console.log(response.data);

    res.send({
        "code": response.data.countryCode, 
        "code3": response.data.countryCode3, 
        "name": response.data.countryName, 
        "emoji": response.data.countryEmoji, 
        "ip": req.params.ip,
    });
})

app.listen(port, () => console.log('Up and running!'));