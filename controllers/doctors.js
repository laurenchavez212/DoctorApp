const knex = require("../db/knex.js");

module.exports = {
  // First Page
  index: (req, res) => {
    knex('doctor')
      .then((results) => {
        res.render('index', {
          doctor: results
        })
      })
  },
  // Login Page
  drLoginPg: (req, res) => {
    res.render('dr_login')
  },

  register: (req, res) => {
    knex("doctor").insert({
      name: req.body.name,
      email: req.body.email,
      bio: req.body.bio,
      img_url: req.body.img_url,
      password: req.body.password
    }).then(() => {
      res.redirect("/doctor/login");
    })
  },

  login: (req, res) => {
    knex('doctor').where('email', req.body.email)
      .then((result) => {
        let doctor = result[0];

        if (doctor.password === req.body.password) {
          req.session.doctor_id = doctor.id;
          req.session.save(() => res.redirect('/unconfirmed'))
        } else {
          res.redirect('/doctor/login');
        }
      })
  },

}
