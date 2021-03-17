require("dotenv").config({ path : '.env'});
const axios = require("axios");

// Making the API call to the lichess URL
exports.accountInformationHandler = (req, res) => {

    const token = process.env.TOKEN; // Using the ready-made Lichess Token for a created account

    const options = {
        headers : {
            "accepts": "application/json",
            "content-type" : 'application/json',
            "Authorization" : "Bearer " + token // Concatenate token value
        }
    }
    
    axios.get("https://lichess.org/api/account", options) // Call the Lichess API
    .then(response => {
        res.json({
            data: response.data
        });
    })
    .catch(err => {
        res.json({
            message : "Something wrong with authorization" + err
        });
    })   
}