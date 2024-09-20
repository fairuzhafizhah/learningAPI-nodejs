//fifth

const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const app = express(); 

// const app = express();
app.use(express.json());

// app.use(payload.setUserProp);
// app.use(logger.common);
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser.json())
app.use(cors())

require('./config/studentroute.js')(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port " + 3000);
});