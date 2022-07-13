<template>
  <section class="toys-app main-layout">
    <toy-filter  @setFilter="setFilter" />
    <!-- <button @click="goToEdit" class="btn btn-danger-text add-btn">Add a new Toy</button> -->
    <toys-list @newToy="goToEdit" @removeToy="removeToy" v-if="toys" :toys="toys" ></toys-list>
  </section>
</template>
<script>
import { toyService } from "../services/toy-service.js"
import toysList from "../components/toys-list.vue"
import toyFilter from "../components/toy-filter.vue"

export default {
  name: "toys-app",
  data() {
    return {
filterBy: {
        name: '',
        status: '',
        byLabel: [],
        bySort: '',
      },
    }
  },
  computed: {
    toys() {
      return this.$store.getters.toys
    },
    // toysToShow() {
    //   // console.log('toys to show');
    //   // if (!this.filterBy) return this.toys
    //   // console.log( this.filterBy)
    //   // const regex = new RegExp(this.filterBy.name, 'i')
    //   // return this.toys.filter((toy) => regex.test(toy.name))
    //   if (!this.filterBy) return this.toys
    //   const regex = new RegExp(this.filterBy.name, 'i')
    //   return this.toys.filter((toy) => regex.test(toy.name))
    // },
  },
  created() {},
  methods: {
    setFilter(filterBy) {
      // this.filterBy = filterBy
      this.$store.dispatch({type:'loadToys',filterBy})
      // this.filterToys()
      
    },
    // filterToys() {
      // const filterBy = JSON.parse(JSON.stringify(this.filterBy))
      // this.$store.dispatch({type:'loadToys',filterBy})

    // },
    
    removeToy(toyId) {
      this.$store.dispatch({ type: "removeToy", toyId })
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
