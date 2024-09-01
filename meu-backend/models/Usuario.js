const mongoose = require('mongoose');

// Definir o esquema do usuário
const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
});

// Criar o modelo de usuário
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
