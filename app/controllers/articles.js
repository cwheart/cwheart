var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

exports.view = function(req, res){
  Article.findById("50f645625aff4c9714000003").exec(function(err, article) {
    res.render('articles/view', { title: article.title, article: article });
  });
};