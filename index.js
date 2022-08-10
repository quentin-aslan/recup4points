const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;
app.use(express.static(__dirname + '/public'));
app.listen(port);

// Body parser middleware

app.use(bodyParser.json());

console.log('Server running on port ' + port);

// API

const BookingAPI = require('./api/Booking.js');
const slotAPI = require('./api/Slot.js');

app.use('/api/booking', BookingAPI);
app.use('/api/slot', slotAPI);

app.get('/', (req, res) => {
  res.send("Recup4points Backend");
});