const express = require('express');
const Usuario = require('../models/Usuario'); // Importe o modelo de usuário

const router = express.Router();

// Rota de Registro
router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const novoUsuario = new Usuario({ nome, email, senha });
    await novoUsuario.save();
    res.status(201).send({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).send({ message: 'Erro ao registrar usuário.' });
  }
});

module.exports = router;
