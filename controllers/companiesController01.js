/*const pool = require('../config/db');

const listCompanies = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM companies');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const listProfessionals = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM professionals WHERE company_id = $1',
      [req.params.id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const listServices = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM services WHERE company_id = $1',
      [req.params.id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { listCompanies, listProfessionals, listServices };*/