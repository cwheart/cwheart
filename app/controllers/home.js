var mongoose = require('mongoose'),
  Article = mongoose.model('Article');

exports.index = function(req, res){
  var perPage = 10,
    page = req.param('page') > 0 ? req.param('page') : 0;
  Article.find({}).sort({'_id': -1}) // sort by id
    .limit(perPage)
    .skip(perPage * page)
    .exec(function(err, articles) {
      if (err) return res.render('500');
      Article.count().exec(function (err, count) {
        res.render('home/index', {
          title: 'List of Articles',
          articles: articles,
          page: page,
          pages: count / perPage
        });
      });
    });
};