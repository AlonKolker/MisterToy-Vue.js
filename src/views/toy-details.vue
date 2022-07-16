<template>
  <section v-if="toy" class="toy-details">
    <article class ="toy-main-content flex flex-column">
      <p><span class="">ID: </span> {{ toy._id }}</p>
      <p><span class="">Name: </span> {{ toy.name }}</p>
      <p><span class="">Price: </span> {{ toy.price }} $</p>
      <p><span class="">Status: </span>{{ toy.inStock? 'In stock': 'Out of stock'}}</p>
      <div>Reviews:</div> {{toy.reviews? '':'no reviews yet, be the first to comment!'}}
      <ul v-for="review in toy.reviews" :key="toy.id" class="toy-reviews">
        <li>{{ review }}</li>
      </ul>
    </article>
    <button @click="goBack" class="btn btn-danger-text add-btn">go back</button>
  </section>
</template>

<script>
import { toyService } from "../services/toy-service.js"

export default {
  name: "toy-detail",
  data() {
    return {
      toy: null,
      review:null
    }
  },
  created() {
    const { _id } = this.$route.params
    // console.log()
    toyService.getById(_id).then((toy) => {
      this.toy = toy
    })
  },
  methods: {
    goBack() {
      this.$router.push("/toy")
    },
  },
  computed: {

  },
}
</script>
