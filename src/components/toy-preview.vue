<template>
  <section v-if="toy" class="toy-prev">
    <div class="labels flex flex-row">
      <div
        v-for="label in toy.labels"
        class="label"
        :style="{ 'background-color': randColor(label) }"
      >
        {{ label }}
      </div>
    </div>
    <div class="toy-name-prev">{{ toy.name }}</div>
    <img src="../styles/img/teddy.png" class="prev-img" />
    <div class="">{{ toy.price }}$</div>
    <div :class="Stock">
      {{ toy.inStock === true ? "in stock" : "out of stock" }}
    </div>

    <div class="prev-options">
      <button class="btn-light" @click="goToDetail">details</button>
      <button
        v-if="user ? this.user.isAdmin : false"
        class="btn-light"
        @click="goToEdit"
      >
        edit
      </button>
      <button
        v-if="user ? this.user.isAdmin : false"
        class="btn-light"
        @click="removeToy(toy._id)"
      >
        delete
      </button>
    </div>
  </section>
</template>
<script>
export default {
  name: "toy-preview",
  props: {
    toy: Object,
    user: Object,
  },
  emits: ["removeToy"],
  data() {
    return {
      inStock: null,
      isAdmin: false,
    }
  },
  components: {},
  methods: {
    goToDetail() {
      this.$router.push(`/toy/${this.toy._id}`)
    },
    removeToy(toyId) {
      this.$emit("removeToy", toyId)
    },
    goToEdit() {
      this.$router.push(`/toy/edit/${this.toy._id}`)
    },
     randColor(currLabel) {
      const labelsColors = [
        "#577590",
        "#f8961e",
        "#43aa8b",
        "#f4978e",
        "#ffbe0b",
      ]
      const labels = ["Baby", "Battery powered", "Doll", "Outdoor", "On wheels"]
      const idx = labels.findIndex((label) => label === currLabel)

      return labelsColors[idx]
    },
  },
  computed: {
    Stock() {
      return {
        "in-stock": this.toy.inStock,
        "missing-stock": !this.toy.inStock,
      }
    },
 
  },
}
</script>
