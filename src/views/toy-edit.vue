<template>
  <section v-if="toyToEdit" class="edit-conteiner flex">
    <form @submit.prevent="saveToy" class="toy-edit">
      <div class="form-control">
        <label for="txt" class="form-label">Toy name      </label>
        <input
          required
          v-model="toyToEdit.name"
          id="txt"
          type="text"
          class="form-input"
          placeholder="Enter your toy vendor here..."
        />
      </div>
      <div class="form-control">
        <label for="price" class="form-label">Toy price   </label>
        <input
          required
          v-model.number="toyToEdit.price"
          id="price"
          type="number"
          class="form-input"
        />
      </div>
      <div class="edit-btn-group">
        <button  class="btn btn-danger-text ">save</button>
        <button @click="goBack" class="btn btn-danger-text">go back</button>
      </div>
    </form>
  </section>
</template>

<script>
import { toyService } from "../services/toy-service.js"

export default {
  name: "toy-edit",
  data() {
    return {
      toyToEdit: null,
    }
  },
  async created() {
    const { _id } = this.$route.params
    try {
      if (_id) {
        const toy = await toyService.getById(_id)
        this.toyToEdit = toy
      } else {
        this.toyToEdit = toyService.getEmptyToy()
      }
    } catch (err) {
      console.log("save/edit ")
    }

  },
  methods: {
    goBack() {
      this.$router.push("/toy")
    },
    async saveToy() {
      try {
        await this.$store.dispatch({ type: "saveToy", toy: this.toyToEdit })
        console.log('AGAIN???');
        this.$router.push("/toy")
      } catch (err) {
        console.log("save/edit was abborted ")
      }
    },
  },
}
</script>
