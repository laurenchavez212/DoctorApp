const doctors = require("../controllers/doctors.js");
const bookings = require("../controllers/bookings.js");
const drNotes = require("../controllers/drNotes.js");

module.exports = function(app) {

  app.get('/', doctors.index);

  app.get('/doctor/login', doctors.drLoginPg);
  app.post('/register', doctors.register);
  app.post('/login', doctors.login);

  app.get('/book/:id', bookings.bookDr);
  app.post('/book/:id', bookings.addBooking);

  app.use(authenticateUser);

  app.get('/booking/:id', bookings.appDets);
  app.post('/notes/:id', drNotes.postNote);
  app.get('/del/note/:id', drNotes.delNote);

  app.get('/book/edit/:id', bookings.editPg);
  app.post('/book/edit/:id', bookings.editBooking);

  app.get('/completed/:id', bookings.markCompleted);
  app.get('/confirmed/:id', bookings.markConfirmed);
  app.get('/del/:id', bookings.delBooking);

  app.get('/confirmed', bookings.confirmedApps);
  app.get('/unconfirmed', bookings.unconfirmedApps);
  app.get('/completedApps', bookings.completedApps);

}


function authenticateUser(req, res, next) {
  if (!req.session.doctor_id) {
    res.redirect("/");
  } else {
    next();
  }
}
