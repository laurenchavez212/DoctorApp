const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: (req, res) => {
  knex('doctor')
  .then((results) => {
    res.render('index', {doctor: results})
  })
},

  createName: function(req, res){
    req.session.name = req.body.name;

    req.session.save(()=>{
      res.redirect('/')
    })
  }
}
