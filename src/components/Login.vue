<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label>Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post('http://localhost:3000/login', {
            email: this.email,
            password: this.password,
          });
          console.log(response.data);
        } catch (error) {
          console.error('Login failed:', error.response.data.message);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione seus estilos aqui */
  </style>
  