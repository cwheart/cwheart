require('../app/models/article');
require('../app/models/category');
var mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  Article = mongoose.model('Category');

module.exports = function (app) {
  var home = require('../app/controllers/home');
  app.get("/", home.index);

  var categories = require('../app/controllers/categories');
  app.get("/cate/", categories.index);
  app.get("/cate/:cate", categories.view);

  var articles = require('../app/controllers/articles');
  app.get("/articles/:id", articles.view);

  require('./routes/admin')(app);
}
