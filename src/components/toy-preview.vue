<template>
  <section v-if="toy" class="toy-prev">
    <div class="labels flex flex-row" >
     <div  v-for="label in toy.labels" class="label" :style="{ 'background-color': randColor }"> {{ label }} </div>
    </div>
    <div class="">{{ toy.name }}</div>
    <div class="">{{ toy.price }}$</div>
    <div :class="Stock">
      {{ toy.inStock === true ? "in stock" : "out of stock" }}
    </div >

    <div class="prev-options">
      <button class="btn-light" @click="goToDetail">details</button>
      <button class="btn-light" @click="goToEdit">edit</button>
      <button class="btn-light" @click="removeToy(toy._id)">delete</button>
    </div>
  </section>
</template>
<script>
import { utilService } from '../services/util-service.js'
export default {
  name: "toy-preview",
  props: {
    toy: Object,
  },
  emits: ["removeToy"],
  data() {
    return {
      inStock: null,
    }
  },
  components: {},
  methods: {
    goToDetail() {
      this.$router.push(`/toys/${this.toy._id}`)
    },
    removeToy(toyId) {
      this.$emit("removeToy", toyId)
    },
    goToEdit() {
      this.$router.push(`/toys/edit/${this.toy._id}`)
    },
  },
  computed: {
    Stock() {
      return {
        "in-stock": this.toy.inStock,
        "missing-stock": !this.toy.inStock,
      }
    },
 
    randColor(){
   return utilService.getRandomColor()
 }
  },
}
</script>
