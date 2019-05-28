
const request = require('request');

const geocode = (data, callback) => {
    const urlForLongLat = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(data)+'.json?access_token=pk.eyJ1IjoiYXNocmFmNTE1MTM5IiwiYSI6ImNqdnhjbXk5MzAzZjQ0M3BvamR0cXh4cGUifQ.uCKHM0oNO2JXOfhxXUAGxA';
    request({url: urlForLongLat, json: true},(error, response)=>{
        if(error) {
            callback(" not able to connect with darsky",undefined);
        } else if (response.body.features.length === 0) {
            callback(" not able to connect with darsky",undefined);
        } else{
            console.log("response = ", response.body.features[0]);
            
            callback(undefined,{
                longitude : response.body.features[0].center[0],
                latitude : response.body.features[0].center[1],
                location: response.body.features[0].place_name
            });
        }
    });
    
}



module.exports = geocode;