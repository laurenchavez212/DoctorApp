const knex = require("../db/knex.js");

module.exports = {

  postNote: (req, res) => {
    knex('drNotes').insert({
        content: req.body.content,
        booking_id: req.params.id,
      })
      .then(() => {
        res.redirect('back')
      })
  },
}
