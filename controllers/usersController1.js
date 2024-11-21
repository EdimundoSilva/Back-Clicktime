/*const pool = require('../config/db');

const createUser = async (req, res) => {
  const { first_name, last_name, phone, email } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO users (first_name, last_name, phone, email) VALUES ($1, $2, $3, $4) RETURNING *',
      [first_name, last_name, phone, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUserAppointments = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT a.*, c.name AS company_name, p.name AS professional_name, s.name AS service_name
      FROM appointments a
      JOIN companies c ON a.company_id = c.id
      JOIN professionals p ON a.professional_id = p.id
      JOIN services s ON a.service_id = s.id
      WHERE a.user_id = $1`,
      [req.params.id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createUser, getUserAppointments };*/