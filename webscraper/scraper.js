var cheerio = require('cheerio');
var request = require('request');
var fs      = require('fs');

  request('http://natstar93.github.io/', function(err, res, html) {
    if(!err && res.statusCode === 200)
      var $ = cheerio.load(html);
      var allTitles = $('.posts-li');

      allTitles.each(function(index, element) {
        var title = $(element).find('a.post-link').text();
        var date = $(element).find('.post-meta').text();
        var link = 'http://natstar93.github.io/' + $(element).find('a.post-link').attr('href');
        console.log(title, date, link);
      })
  })
