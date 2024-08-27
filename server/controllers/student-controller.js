const Student = require("../models/student-model");

//crud operations

//create
const register = async (req, res) => {
  try {
    const { studentID, name, email, year, isGraduated } = req.body;

    const alreadyExists = await Student.findOne({ studentID });

    if (alreadyExists) {
      res.send({ msg: "Student Already Exists" });
    }

    const student_created = await Student.create({
      studentID,
      name,
      email,
      year,
      isGraduated,
    });

    return res.status(200).send({ msg: student_created });
  } catch (error) {
    return res.status(501).send({ msg: "Problem in creating Student" });
  }
};

const retrieve = async (req, res) => {
  try {
    const response = await Student.find({});

    return res.status(200).send({ msg: response });
  } catch (error) {
    return res.status(500).send({ msg: "Unable to retrieve students' data" });
  }
};

const update = async (req, res) => {
  try {
    const { studentID } = req.params;

    const { name, email, year, isGraduated } = req.body;

    const studentUpdated = await Student.findOneAndUpdate(
      { studentID: studentID },
      { name: name, email: email, year: year, isGraduated: isGraduated },
      { new: true }
    );

    if (!studentUpdated) {
      return res.status(501).send({ msg: "Student not found" });
    } else {
      return res.status(200).send({ msg: "Student found and updated " });
    }
  } catch (error) {
    return res.status(500).send({ msg: "Unable to update student's data" });
  }
};

const remove = async (req, res) => {
  try {
    const { studentID } = req.params;

    const studentDeleted = await Student.findOneAndDelete({
      studentID: studentID,
    });

    if (studentDeleted) {
      return res.status(200).send({ msg: "Student found and deleted" });
    }
  } catch (error) {
    return res.status(500).send({ msg: "Student not found " });
  }
};

module.exports = { register, retrieve, update, remove };
