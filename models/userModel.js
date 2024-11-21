const pool = require('../config/db');

// Insere um novo usuário no banco
const createUser = async ({ first_name, last_name, phone, email }) => {
  const query = `
    INSERT INTO users (first_name, last_name, phone, email)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [first_name, last_name, phone, email];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Busca agendamentos de um usuário pelo ID
const getUserAppointments = async (userId) => {
  const query = `
    SELECT a.*, c.name AS company_name, p.name AS professional_name, s.name AS service_name
    FROM appointments a
    JOIN companies c ON a.company_id = c.id
    JOIN professionals p ON a.professional_id = p.id
    JOIN services s ON a.service_id = s.id
    WHERE a.user_id = $1;
  `;
  const result = await pool.query(query, [userId]);
  return result.rows;
};

module.exports = {
  createUser,
  getUserAppointments,
};