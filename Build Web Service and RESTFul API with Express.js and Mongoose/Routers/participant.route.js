const express = require('express')

const ParticipantController = require("../Controllers/participant.controller")

const router = express.Router()

// Buat user baru
router.post('/', ParticipantController.createNewParticipant)
// Dapetin user berdasar ID
router.get('/:id_part', ParticipantController.getParticipantbyId)
// Update data user
router.put('/:id_part', ParticipantController.updateParticipantbyId)
// Nampilin semua user
router.get('/', ParticipantController.getAllParticipants)
// Hapus data user
router.delete('/:id_part', ParticipantController.deleteParticipantbyId)

module.exports = router