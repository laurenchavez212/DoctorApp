const doctors = require("../controllers/doctors.js");

module.exports = function(app){
  app.get('/', doctors.index);
  
}
