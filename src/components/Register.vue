<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <div>
          <label>Name:</label>
          <input type="text" v-model="nome" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="senha" required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        nome: '',   // Nome do usuário
        email: '',  // Email do usuário
        senha: '',  // Senha do usuário
      };
    },
    methods: {
      async register() {
        console.log('Dados enviados:', this.nome, this.email, this.senha);
        try {
          console.log('Antes da requisição');
          const response = await axios.post('http://localhost:3000/auth/register', {
            nome: this.nome,
            email: this.email,
            senha: this.senha,
          });
          console.log('Resposta do servidor:', response.data);
        } catch (error) {
          console.error('Erro capturado:', error);
          if (error.response) {
            console.error('Erro na resposta do servidor:', error.response.data.message);
          } else if (error.request) {
            console.error('Nenhuma resposta do servidor:', error.request);
          } else {
            console.error('Erro ao configurar a requisição:', error.message);
          }
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione aqui seus estilos */
  </style>
  