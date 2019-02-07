//controller - fetch headlines
const db = require("../models");
const scrape = require("../scripts/scrape");

module.exports = {
  scrapeHeadlines: function(req,res) {
    return scrape()
      .then( articles => {
        return db.Headline.create(articles);
      })
      .then( dbHeadline => {
        if (dbHeadline.length === 0) {
          res.json({
            message: `No New Articles Currently Available.`
          });
        }
        else {
          res.json({
            message: `Added ${dbHeadline.length} New Articles.`
          });
        }
      })
      .catch(err => {
        res.json({
          message: `Article Scrape Complete.`
        });
      });
  }
};

