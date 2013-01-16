var adminLayout = 'layouts/admin';
var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

exports.index = function(req, res){
  res.render('admin/articles/index', { title: 'Express', layout: adminLayout });
};
exports.view = function(req, res){
  res.render('admin/articles/view', { title: 'Express', layout: adminLayout });
};
exports.new = function(req, res){
  res.render('admin/articles/new', {
    title: 'Express',
    layout: adminLayout,
    article: new Article({})
  });
};
exports.create = function(req, res){
  var article = new Article(req.body);
  console.log(article);
  article.save(function(err){
    if (err) {
      console.log(err.errors);
      res.render('admin/articles/new', {
          title: 'New Article',
          article: article,
          errors: err.errors
      });
    }else{
      res.redirect('/admin/articles/'+article._id);
    }
  });
};
exports.edit = function(req, res){
  res.render('admin/articles/edit', { title: 'Express', layout: adminLayout });
};
exports.update = function(req, res){
  res.render('admin/articles/edit', { title: 'Express', layout: adminLayout });
};
exports.destroy = function(req, res){
  res.render('articles/view', { title: 'Express', layout: adminLayout });
};