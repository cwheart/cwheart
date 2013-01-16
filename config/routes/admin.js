module.exports = function (app) {
  var articles = require('../../app/controllers/admin/articles');
  app.get("/admin/articles/new", articles.new);
  app.post("/admin/articles", articles.create);
}