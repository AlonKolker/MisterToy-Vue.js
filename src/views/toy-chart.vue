<template>
  <h1>Toys Chart</h1>
  <DoughnutChart v-if="toys" :chartData="testData" />
  <el-button type="danger" @click="goBack" class="btn btn-primary">go back</el-button>
</template>

<script>
import { Chart, registerables } from "chart.js"
import { DoughnutChart } from "vue-chart-3"

Chart.register(...registerables)

export default {
  name: "dashboard",
  components: { DoughnutChart },
  data() {
    return {
      tempToys: null,
      testData: {
        labels: ["Battery powered", "Outdoor", "On wheels", "Baby", "Doll"],
        datasets: [
          {
            data: [0, 0, 0, 0, 0],
            backgroundColor: [
              "#77CEFF",
              "#0079AF",
              "#123E6B",
              "#97B0C4",
              "#A5C8ED",
            ],
          },
        ],
      },
    }
  },
  methods: {
    goBack() {
      this.$router.push("/toys")
    },
  },
  computed: {
    toys() {
      let toys = JSON.parse(JSON.stringify(this.$store.getters.toys))
      toys.forEach((toy) => {
        this.testData.labels.forEach((label, idx) => {
          if (toy.labels.includes(label)) this.testData.datasets[0].data[idx]++
        })
      })
     return this.tempToys = toys
    },
  },
}
</script>


