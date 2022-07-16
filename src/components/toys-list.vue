<template>
  <button @click="goToEdit" class="btn btn-danger-text add-btn">
    Add a new Toy
  </button>

  <ul class="toy-list">
    <toy-preview
      @removeToy="removeToy"
      v-for="toy in toys"
      :toy="toy"
      :user="user"
      :key="toy._id"
    />
  </ul>
</template>

<script>
import toyPreview from "./toy-preview.vue"

export default {
  props: {
    toys: {
      type: Array,
      required: true,
    },
    user: {
      type: Object,
      // required: true,
    },
  },
  emits: ["removeToy", "newToy"],
  components: {
    toyPreview,
  },
  methods: {
    removeToy(toyId) {
      this.$emit("removeToy", toyId)
    },
    goToEdit() {
      this.$emit("newToy")
    },
  },
}
</script>
