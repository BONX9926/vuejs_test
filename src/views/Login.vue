<template>
  <div class="login">
    <div class="loin__box">
      <h1>Login</h1>
      <div>
        <v-text-field label="Username" v-model="username"></v-text-field>
      </div>
      <div>
        <v-text-field type="password" label="Password" v-model="password"></v-text-field>
      </div>
      <div>
        <v-btn @click="SignIn" block elevation="2">Sign In</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    SignIn() {
      if (this.username == "admin" && this.password == "admin") {
        
        this.$store.dispatch('Login', {
          username: this.username
        }).then( () => {
          alert('Login Success')
        })
      }
    }
  }
}
</script>

<style scoped>
.login {
  position: relative;
  height: 100vh;
}
.loin__box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translate(-50%, -50%);
  padding: 10px;
  border: 1px solid #e3e3e3;
}
</style>