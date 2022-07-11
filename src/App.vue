<template>
  <section>
    <app-header />
    <router-view />
  </section>
</template>

<script>
import appHeader from "./components/app-header.vue"
export default {
  name: "app",
  template: `
`,
  data() {
    return {}
  },
  created() {
        this.$store.dispatch({ type: 'loadToys' })
  },
  methods: {},
  computed: {},
  unmounted() {},
    components: {
    appHeader,
  },
}

</script>
