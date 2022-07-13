

<template>
  <section class="toy-filter">
    <el-input
      v-model="filterBy.name"
      @input="setFilter"
      type="text"
      class="filter-input"
      placeholder="Search by name..."
    />
    <el-select @change="setFilter" v-model="filterBy.status">
      <el-option value="">Select status</el-option>
      <el-option v-for="(opt, idx) in stockOptions" :value="opt" :key="idx">
        {{ opt }}
      </el-option>
    </el-select>
    <el-select @change="setFilter" v-model="filterBy.byLabel" multiple>
      <el-option value="">Select label</el-option>
      <el-option v-for="(label, idx) in labels" :value="label" :key="idx">
        {{ label }}
      </el-option>
    </el-select>
    <el-select @change="setFilter" v-model="filterBy.bySort">
      <el-option value="">Select sort</el-option>
      <el-option v-for="(opt, idx) in sortOptions" :value="opt" :key="idx">
        {{ opt }}
      </el-option>
    </el-select>
  </section>
</template>

<script>
export default {
  name: 'toy-filter',
  data() {
    return {
      filterBy: {
        name: '',
        status: '',
        byLabel: [],
        bySort: '',
      },
      labels: ['On wheels', 'Box game', 'Art', 'Baby', 'Doll', 'Puzzle', 'Outdoor', 'Battery powered'],
      stockOptions: ['In stock', 'Out of stock'],
      sortOptions: [
        'Name - Increasing',
        'Price - Increasing',
        'Created - Increasing',
        'Name - Decreasing',
        'Price - Decreasing',
        'Created - Decreasing',
      ],
    }
  },
  methods: {
    setFilter() {
      if (this.filterBy.byLabel[0] === '') this.filterBy.byLabel = []
      this.$emit('setFilter', this.filterBy)
    },
  },
  components: {},
}
</script>


<!-- <template>
  <section class="toy-filter">
    <el-input
      v-focus
      v-model="filterBy.name"
      @input="setFilter"
      type="search"
      class="form-input"
      placeholder="search by..."
    />
  </section>
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
</script> -->
