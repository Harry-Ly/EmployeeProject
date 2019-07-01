const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  first: { type: String, required:  true },
  last: { type: String, required:  true },
  address: { type: String, required:  true },
  city: { type: String, required:  true },
  state: { type: String, required:  true },
  zip: { type: String, required:  true },
  home: { type: String, required:  true },
  cell: { type: String, required:  true },
  email: { type: String, required:  true }
});

module.exports = mongoose.model('Employee', employeeSchema);
