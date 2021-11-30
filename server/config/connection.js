const mongoose = require('mongoose');

mongoose.connect(
  "mongodb+srv://ezhil:ezhil@cluster0.09fss.mongodb.net/BookSearch?retryWrites=true&w=majority",
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

module.exports = mongoose.connection;
