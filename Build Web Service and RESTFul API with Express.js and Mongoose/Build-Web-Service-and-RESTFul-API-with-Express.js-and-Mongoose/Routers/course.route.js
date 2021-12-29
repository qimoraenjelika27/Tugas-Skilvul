const express = require('express')

const CourseController = require("../Controllers/course.controller")

const router = express.Router()

// Buat user baru
router.post('/', CourseController.createNewCourse)
// Dapetin user berdasar ID
router.get('/:id_course', CourseController.getCoursebyId)
// Update data user
router.put('/:id_course', CourseController.updateCoursebyId)
// Nampilin semua user
router.get('/', CourseController.getAllCourses)
// Hapus data user
router.delete('/:id_course', CourseController.deleteCoursebyId)

module.exports = router