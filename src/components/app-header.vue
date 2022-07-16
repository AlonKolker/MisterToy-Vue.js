<template>
  <header class="header-conteiner full main-layout">
    <div class="flex items-center space-between">
      <div class="flex items-center space-between">
        <img class="logo-img" src="../styles/img/logo.png" alt="" />
        <div>
          <span>Mister-Toy</span>
          <div>{{ userGreet }}</div>
        </div>
      </div>

      <nav class="nav flex flex-row">
        <RouterLink class="mark" to="/">Home</RouterLink>
        <RouterLink class="mark" to="/toy">Toys</RouterLink>
        <RouterLink class="mark" to="/toyChart">Toy-Chart</RouterLink>
        <RouterLink class="mark" to="/about">About</RouterLink>
        <a v-if="userGreet" class="mark" href="#" @click="onLogout">Logout</a>
        <a v-else class="mark" href="#" @click="onLogin">Login</a>
      </nav>
    </div>
  </header>
</template>
<script>
export default {
  name: "header-page",
  data() {
    return {
      currUser: null,
    }
  },
  computed: {},
  created() {},
  methods: {
    async onLogout() {
      await this.$store.dispatch({ type: "logout" })
      this.$router.push("/login")
    },
     onLogin() {
      this.$router.push("/login")
    },
  },
  computed: {
    userGreet() {
      let userName = this.$store.getters.loggedInUser?.fullname
      if (!userName) return ""
      userName = userName.charAt(0).toUpperCase() + userName.slice(1)
      return "Connected user: " + userName
    },
  },
  components: {},
}
</script>
