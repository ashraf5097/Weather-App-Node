
const request = require('request');

const forcast = (lati, long, callback) => {
const url = 'https://api.darksky.net/forecast/a6136c4953c76d959d9c23fb8da4b59b/'+lati+','+long+'?lang=en'

request({url: url, json: true},(error, response)=>{
    if(error) {
        callback(" not able to connect with weather service",undefined);
    } else if (response.body.features === 0) {
        callback("lati and longg for this city is not availale", undefined);
    } else{
        callback(undefined,response.body.currently.summary+'. It is currently '+response.body.currently.temperature+' degrees out.'+'There is '+response.body.currently.precipProbability+'% chance of rain');
    }
});
}



module.exports = forcast;