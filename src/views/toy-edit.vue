<template>
  <section v-if="toyToEdit" class="toy-edit ">
    <form @submit.prevent="saveToy" class="form">
      <div class="form-control">
        <label for="txt" class="form-label">Toy name</label>
        <input required v-model="toyToEdit.name" id="txt" type="text" class="form-input"
          placeholder="Enter your toy vendor here..." />
      </div>
      <div class="form-control">
        <label for="price" class="form-label">Toy price</label>
        <input required v-model.number="toyToEdit.price" id="price" type="number" class="form-input" />
      </div>
      <div class="btn-group">
        <button @click="saveToy" class="btn btn-info">save</button>
        <button @click="goBack" class="btn btn-danger-text">go back</button>
      </div>
    </form>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service.js'

export default {
  name: 'toy-edit',
  data() {
    return {
      toyToEdit: null,
    }
  },
  created() {
    const { _id } = this.$route.params
      console.log('id')
    if (_id) {
      toyService.getById(_id).then((toy) => {
        this.toyToEdit = toy
      }).then(err=> console.log('error') )
    } else{ this.toyToEdit = toyService.getEmptyToy()
    console.log('get empty');}
  },
  methods: {
    goBack() {
      this.$router.push('/toys')
    },
    saveToy() {
      this.$store.dispatch({ type: 'saveToy', toy: this.toyToEdit }).then(() => {
        this.$router.push('/toys')
      })
    },
  },
}
</script>
