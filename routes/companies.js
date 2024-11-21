const express = require('express');
const {
    getAllCompanies,
    getCompanyServices,
    getServiceSchedule
} = require('../controllers/companiesController');

const router = express.Router();

// Listar todas as empresas
router.get('/', getAllCompanies);

// Obter serviços e profissionais de uma empresa específica
router.get('/:id/services', getCompanyServices);

// Obter horários disponíveis de um serviço específico de uma empresa
router.get('/:companyId/services/:serviceId/schedule', getServiceSchedule);

module.exports = router;