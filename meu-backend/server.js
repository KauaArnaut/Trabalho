const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Importa o cors
const authRoutes = require('./routes/auth'); // Importe as rotas de autenticação

const app = express();

// Habilita CORS para todas as rotas
app.use(cors());

mongoose.connect('mongodb://localhost:27017/meuBanco', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB');
}).catch((error) => {
  console.error('Erro ao conectar ao MongoDB:', error);
});

app.use(express.json());
app.use('/auth', authRoutes); // Use as rotas de autenticação

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
