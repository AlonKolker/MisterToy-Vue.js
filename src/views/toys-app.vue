<template>
  <section class="toys-app">
        <button @click="goToEdit" class="">Add a new Toy</button>
      <toy-filter @setFilter="setFilter" />
    <toys-list  @removeToy="removeToy" v-if="toys" :toys="toysToShow" />
  </section>
</template>
<script>
import { toyService } from "../services/toy-service.js"
import toysList from "../components/toys-list.vue"
import toyFilter from '../components/toy-filter.vue'

export default {
  name: "toys-app",
  data() {
    return {
      filterBy: null,
    }
  },
  computed: {
    toys() {
      return this.$store.getters.toys
    },
    toysToShow() {
      // console.log('toys to show');
      // if (!this.filterBy) return this.toys
      // console.log( this.filterBy)
      // const regex = new RegExp(this.filterBy.name, 'i')
      // return this.toys.filter((toy) => regex.test(toy.name))
      if (!this.filterBy) return this.toys
      const regex = new RegExp(this.filterBy.name, 'i')
      return this.toys.filter((toy) => regex.test(toy.name))
    },
     setFilter(filterBy) {
      console.log(' app');
      this.filterBy = filterBy
    },
  },
  created() {},
  methods: {
    loadToys() {
      toyService.query().then((toys) => (this.toys = toys))
    },
      removeToy(toyId) {
      this.$store.dispatch({ type: 'removeToy',toyId })
    },
      goToEdit() {
      this.$router.push(`/toys/edit`)
    },
  },
  components: {
    toysList,
    toyFilter,
  },
}
</script>
