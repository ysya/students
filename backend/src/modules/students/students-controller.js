const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const students = await getAllStudents(req.query);
    res.json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const student = await addNewStudent(req.body);
    res.json(student);
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const student = await updateStudent(req.params.id, req.body);
    res.json(student);
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const student = await getStudentDetail(req.params.id);
    res.json(student);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const student = await setStudentStatus(req.params.id, req.user.id, req.body.status);
    res.json(student);
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
