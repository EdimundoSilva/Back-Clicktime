const pool = require('../config/db');

const createAppointment = async (req, res) => {
  const { user_id, company_id, professional_id, service_id, appointment_date } = req.body;

  try {
    // Verifica se o horário está disponível
    const check = await pool.query(
      'SELECT * FROM appointments WHERE professional_id = $1 AND appointment_date = $2',
      [professional_id, appointment_date]
    );

    if (check.rows.length > 0) {
      return res.status(400).json({ error: 'Horário indisponível' });
    }

    // Cria o agendamento
    const result = await pool.query(
      `INSERT INTO appointments 
      (user_id, company_id, professional_id, service_id, appointment_date)
      VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [user_id, company_id, professional_id, service_id, appointment_date]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createAppointment };