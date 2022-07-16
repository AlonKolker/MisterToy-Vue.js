<template>
  <section class="toys-app main-layout">
    <toy-filter @setFilter="setFilter" />
    <toys-list
      @newToy="goToEdit"
      @removeToy="removeToy"
      v-if="toys"
      :toys="toys"
      :user="user"
    ></toys-list>
  </section>
</template>
<script>
import toysList from "../components/toys-list.vue"
import toyFilter from "../components/toy-filter.vue"

export default {
  name: "toys-app",
  data() {
    return {
      filterBy: {
        name: "",
        status: "",
        byLabel: [],
        bySort: "",
      },
    }
  },
  computed: {
    toys() {
      return this.$store.getters.toys
    },
    user() {
      return this.$store.getters.loggedInUser
    },
  },
  created() {
    if (!this.user) this.$router.push("/login")
  },
  methods: {
    setFilter(filterBy) {
      this.$store.dispatch({ type: "loadToys", filterBy })
    },
    removeToy(toyId) {
      this.$store.dispatch({ type: "removeToy", toyId })
    },
    goToEdit() {
      this.$router.push(`/toy/edit`)
    },
  },
  components: {
    toysList,
    toyFilter,
  },
}
</script>
