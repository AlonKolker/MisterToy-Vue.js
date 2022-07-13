<template>
  <section v-if="toy" class="toy-details">
    <article>
      <p><span class="">ID: </span> {{ toy._id }}</p>
      <p><span class="">Name: </span> {{ toy.name }}</p>
      <p><span class="">Price: </span> {{ toy.price }} $</p>
      <p><span class="">Status: </span>{{ toy.inStock? 'In stock': 'Out of stock'}}</p>
      <div>Reviews:</div>
      <ul v-for="review in toy.reviews" :key="toy.id">
        <li>{{ review }}</li>
      </ul>
    </article>
    <button @click="goBack" class="btn btn-primary">go back</button>
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
      this.$router.push("/toys")
    },
  },
  computed: {

  },
}
</script>
