const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/getlocation', async (req, res) => {
    try {
        let lat = req.body.latlong.lat;
        let long = req.body.latlong.long;
        console.log('lat', lat, 'lon', long);

        let response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=74c89b3be64946ac96d777d08b878d43`);
        
        let locationData = response.data.results[0].components;
        console.log(locationData);

        let { village, county, state_district, state, postcode } = locationData;
        let location = `${village}, ${county}, ${state_district}, ${state}\n${postcode}`;

        res.send({ location });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
