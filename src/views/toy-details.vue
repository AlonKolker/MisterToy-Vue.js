<template>
  <section v-if="toy" class="toy-details">
    <article>
      <p><span class="">ID: </span> {{ toy._id }}</p>
      <p><span class="">Name: </span> {{ toy.name }}</p>
      <p><span class="">Price: </span> {{ toy.price }} $</p>
      <ul v-for="label in toy.lables" :key="toy.id">
        <li>{{ label }}</li>
      </ul>
      <p><span class="">Lables: </span>{{ toy.inStock }}</p>
      <p v-if="review">{{ getReviews }}</p>
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
    const { id } = this.$route.params
    toyService.getById(id).then((toy) => {
      this.toy = toy
    })
  },
  methods: {
    goBack() {
      this.$router.push("/toys")
    },
  },
  computed: {
    getReviews() {
        const review = { rev: { name: "puki", review: "awsome toy!" } } // return storageService.get(KEY, toyId)

    },
  },
}
</script>
