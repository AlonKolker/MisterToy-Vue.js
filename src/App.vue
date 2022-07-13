<template>
  <section class="main-layout">
    <app-header />
    <router-view />
    <app-footer/>
  </section>
</template>

<script>
import appHeader from "./components/app-header.vue"
import appFooter from "./components/app-footer.vue"

export default {
  name: "app",
  template: `
`,
  data() {
    return {}
  },
  created() {
    this.$store.dispatch({ type: "loadToys" })
  },
  methods: {},
  computed: {},
  unmounted() {},
  components: {
    appHeader,
    appFooter,
  },
}
</script>
