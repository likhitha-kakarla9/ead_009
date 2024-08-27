const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  isGraduated: {
    type: Boolean,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
