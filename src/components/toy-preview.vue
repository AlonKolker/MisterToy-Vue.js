<template>
  <pre>{{ toy }}</pre>
  <button @click="goToDetail" class="">details</button>
  <button @click="goToEdit">edit</button>
  <button @click="removeToy(toy._id)" class="">delete</button>
</template>

<script>
export default {
  name: "toy-preview",
  props: {
    toy: Object,
  },
  components: {},
  methods: {
    goToDetail() {
      this.$router.push(`/toys/${this.toy._id}`)
    },
    removeToy(toyId) {
      this.$emit('removeToy', toyId)
     },
       goToEdit() {
      this.$router.push(`/toys/edit/${this.toy._id}`)
    },
  },
}
</script>
