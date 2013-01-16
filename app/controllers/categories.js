var mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  Category = mongoose.model('Category');

exports.index = function(req, res){
  res.render('categories/index', { title: 'Express' });
};

exports.view = function(req, res){
  res.render('categories/view', { title: 'Express' });
};