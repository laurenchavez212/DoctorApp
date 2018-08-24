const knex = require("../db/knex.js");

module.exports = {

  bookDr: (req, res) => {
    knex('doctor').where('id', req.params.id)
      .then((results) => {
        res.render('booking', {
          doctor: results[0]
        })
      })
  },

  addBooking: (req, res) => {
    knex('booking').insert({
        name: req.body.name,
        date: req.body.date,
        reason: req.body.reason,
        details: req.body.details,
        doctor_id: req.params.id,
      })
      .then(() => {
        res.redirect('/')
      })
  },

  editPg: (req, res) => {
    knex('booking')
      .where('id', req.params.id)
      .then((results) => {
        res.render('updateBooking', {
          booking: results[0]
        })
      })
  },

  editBooking: (req, res) => {
    knex('booking').where('id', req.params.id)
      .update({
        name: req.body.name,
        date: req.body.date,
        reason: req.body.reason,
        details: req.body.details,
      })
      .then(() => {
        res.redirect('/')
      })
  },

  appDets: (req, res) => {
    knex('booking').where('id', req.params.id)
      .then((bookingRes) => {
        knex('drNotes').where('booking_id', req.params.id)
          .then((notesRes) => {
            res.render('appointmentDets', {
              booking: bookingRes[0],
              drNotes: notesRes
            });
          })
      })
  },

  markCompleted: (req, res) => {
    knex('booking')
      .where('id', req.params.id)
      .update({
        status: 'completed',
      })
      .then(() => {
        res.redirect('back')
      })
  },

  markConfirmed: (req, res) => {
    knex('booking')
      .where('id', req.params.id)
      .update({
        status: 'confirmed',
      })
      .then(() => {
        res.redirect('back')
      })
  },

  delBooking: (req, res) => {
    knex("booking")
      .del()
      .where('id', req.params.id)
      .then(() => {
        res.redirect("/")
      })
  },

  confirmedApps: (req, res) => {
    knex('doctor')
      .where('id', req.session.doctor_id)
      .then((drResults) => {
        return knex('booking')
          .where('status', 'confirmed')
          .where('doctor_id', req.session.doctor_id)
          .then((bookingResults) => {
            res.render('welcomeDr', {
              doctor: drResults[0],
              booking: bookingResults
            })
          })
      })
  },

  unconfirmedApps: (req, res) => {
    knex('doctor')
      .where('id', req.session.doctor_id)
      .then((drResults) => {
        return knex('booking')
          .where('status', 'unconfirmed')
          .where('doctor_id', req.session.doctor_id)
          .then((bookingResults) => {
            res.render('welcomeDr', {
              doctor: drResults[0],
              booking: bookingResults
            })
          })
      })
  },

  completedApps: (req, res) => {
    knex('doctor')
      .where('id', req.session.doctor_id)
      .then((drResults) => {
        return knex('booking')
          .where('status', 'completed')
          .where('doctor_id', req.session.doctor_id)
          .then((bookingResults) => {
            res.render('welcomeDr', {
              doctor: drResults[0],
              booking: bookingResults
            })
          })
      })
  },

}
