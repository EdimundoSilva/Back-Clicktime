const express = require('express');
const { createUser, getUserAppointments } = require('../controllers/usersController');

const router = express.Router();

router.post('/', createUser); // Cadastro de usuário
router.get('/:id/appointments', getUserAppointments); // Agendamentos do usuário

module.exports = router;