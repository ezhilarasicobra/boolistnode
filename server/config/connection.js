const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://ezhil:ezhil@cluster0.ix2r8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" || 'mongodb://localhost/googlebooks',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

module.exports = mongoose.connection;
