const express = require('express')
const InstructorController = require("../Controllers/instructor.controller")
const router = express.Router()

// Buat user baru
router.post('/', InstructorController.createNewInstructor)
// Dapetin user berdasar ID
router.get('/:id_inst', InstructorController.getInstructorbyId)
// Update data user
router.patch('/:id_inst', InstructorController.updateInstructorbyId)
// Nampilin semua user
router.get('/', InstructorController.getAllInstructors)
// Hapus data user
router.delete('/:id_inst', InstructorController.deleteInstructorbyId)

module.exports = router