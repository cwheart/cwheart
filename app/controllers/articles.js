var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

exports.view = function(req, res){
  Article.findById(req.params.id).exec(function(err, article) {
    res.render('articles/view', { title: article.title, article: article });
  });
};