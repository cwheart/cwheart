var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: String,
  dscr: String
});

mongoose.model('Category', UserSchema);