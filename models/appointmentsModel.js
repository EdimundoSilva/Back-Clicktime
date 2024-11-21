const pool = require('../config/db');

// Verifica se um horário já está ocupado por um profissional
const isAppointmentAvailable = async (professionalId, appointmentDate) => {
  const query = `
    SELECT * FROM appointments
    WHERE professional_id = $1 AND appointment_date = $2;
  `;
  const result = await pool.query(query, [professionalId, appointmentDate]);
  return result.rows.length === 0; // Retorna true se disponível
};

// Cria um novo agendamento
const createAppointment = async ({ user_id, company_id, professional_id, service_id, appointment_date }) => {
  const query = `
    INSERT INTO appointments (user_id, company_id, professional_id, service_id, appointment_date)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  const values = [user_id, company_id, professional_id, service_id, appointment_date];
  const result = await pool.query(query, values);
  return result.rows[0];
};

module.exports = {
  isAppointmentAvailable,
  createAppointment,
};