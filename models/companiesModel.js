const pool = require('../config/db');

// Retorna todas as empresas
const getCompanies = async () => {
  const query = 'SELECT * FROM companies;';
  const result = await pool.query(query);
  return result.rows;
};

// Retorna os profissionais de uma empresa
const getProfessionalsByCompany = async (companyId) => {
  const query = 'SELECT * FROM professionals WHERE company_id = $1;';
  const result = await pool.query(query, [companyId]);
  return result.rows;
};

// Retorna os serviços de uma empresa
const getServicesByCompany = async (companyId) => {
  const query = 'SELECT * FROM services WHERE company_id = $1;';
  const result = await pool.query(query, [companyId]);
  return result.rows;
};

module.exports = {
  getCompanies,
  getProfessionalsByCompany,
  getServicesByCompany,
};