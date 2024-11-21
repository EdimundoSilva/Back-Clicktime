const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'click_dados',
  password: 'dorcks',
  port: 5432,
});

// Função para criar o usuário
const createUser = async (req, res) => {
  const { name, email } = req.body;

  // Validação básica
  if (!name || !email ) {
    return res.status(400).json({ error: 'Nome e e-mail são obrigatórios.' });
  }

  try {
    // Inserir o usuário no banco de dados
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );

    const newUser = result.rows[0];

    // Retornar a resposta com os dados do novo usuário
    res.status(201).json({
      message: 'Usuário cadastrado com sucesso!',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao cadastrar usuário' });
  }
};

// Função para obter os agendamentos do usuário
const getUserAppointments = async (req, res) => {
  const { id } = req.params;

  try {
    // Buscar os agendamentos do usuário no banco
    const result = await pool.query(
      'SELECT * FROM appointments WHERE user_id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Nenhum agendamento encontrado.' });
    }

    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao obter os agendamentos.' });
  }
};

module.exports = { createUser, getUserAppointments };