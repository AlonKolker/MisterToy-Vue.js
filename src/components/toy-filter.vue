<template>
  <section class="toy-filter">
    <input
      v-focus
      v-model="filterBy.name"
      @input="setFilter"
      type="search"
      class="form-input"
      placeholder="search by..."
    />
  </section>
  <!-- <pre>{{filterBy.name}}</pre> -->
</template>

<script>
export default {
  name: "toy-filter",
  data() {
    return {
      filterBy: {
        name: "",
      },
    }
  },
  methods: {
    setFilter() {
        console.log('filter filter');
      this.$emit("setFilter", this.filterBy)
    },
  },
}
</script>
