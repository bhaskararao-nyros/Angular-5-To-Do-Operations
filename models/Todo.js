var mongoose = require('mongoose');

var TodosSchema = new mongoose.Schema({
  title: { type: String },
    }, {
  timestamps: true
});

module.exports = mongoose.model('Todo', TodosSchema);