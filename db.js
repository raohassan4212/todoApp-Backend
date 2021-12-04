const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://03002366373:03002366373@clusterpiaic.eaawf.mongodb.net/test',
{ useNewUrlParser: true,
useUnifiedTopology: true },
    (err) => {
        if (!err) {
            console.log("Database is Connect");
        }
        else {
            console.log("Database is not connect");
        }
    }
);

module.exports = mongoose;