///////////////////////////
////    Requirements   ////
///////////////////////////
const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');


///////////////////////////
////     Constants     ////
///////////////////////////
const APP = express();
const PORT = 3003;
const DBNAME = 'plants';


///////////////////////////
//  Mongoose Connection  //
///////////////////////////
mongoose.connect(`mongodb://localhost:27017/${DBNAME}`, { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongeese');
});


///////////////////////////
///  Controller Config  ///
///////////////////////////
const plantsController = require('./controllers/plants')


///////////////////////////
////    Middleware     ////
///////////////////////////
APP.use(express.json())
APP.use('/plants', plantsController)


///////////////////////////
////       Routes      ////
///////////////////////////
APP.listen(PORT, () => {
    console.log(`Listening on port: ${PORT} with Kae, Brittani, and Ken`);
});
