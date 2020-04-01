
//Install express server
const express = require('express');
const path = require('path');

const app = express();
const cors = require("cors");

app.use(
    cors({
      origin: ["https://dataservice.accuweather.com"],
      credentials: true // enable set cookie
    })
  );
  

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/herolo-weather-assignment'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/herolo-weather-assignment/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

