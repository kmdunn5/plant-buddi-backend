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
const plantsController = require('./controllers/plants');


///////////////////////////
//  Cors Port Allowance  //
///////////////////////////
// const whitelist = ['http://localhost:3000']
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('not allowed'))
//         }
//     }
// }

// APP.use(cors(corsOptions))


///////////////////////////
////    Middleware     ////
///////////////////////////
APP.use(express.json());
APP.use('/plants', plantsController);


///////////////////////////
////       Routes      ////
///////////////////////////
APP.listen(PORT, () => {
    console.log(`Listening on port: ${PORT} with Kae, Brittani, and Ken`);
});
