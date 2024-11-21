const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); // Carrega variáveis de ambiente do .env

const userRoutes = require('./routes/users');
const companyRoutes = require('./routes/companies');
const appointmentRoutes = require('./routes/appointments');

const app = express();
app.use(bodyParser.json());

// Configurar rotas
app.use('/users', userRoutes);
app.use('/companies', companyRoutes);
app.use('/appointments', appointmentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}` );
});