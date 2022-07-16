<template>
  <section class="g-map flex flex-column">
    <GMapMap
      :center="center"
      :zoom="13"
      map-type-id="terrain"
      style="width: 700px; height: 400px"
    >
      <GMapCluster>
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="false"
          @click="center = m.position"
        />
      </GMapCluster>
    </GMapMap>
    <div class="about-me-conteiner flex">
      <img class="my-img" src="../styles/img/myPic.jfif" alt="" />
      <div class="about-me-content flex flex-column">
        <div class="about-me-text">
          Hello there! <br> This vue project was created by Alon Kolker <br />
          For more details about me please visit my linkedin page:
        </div>
        <div @click="toLinkedin" class="about-linkedin">
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      center: { lat: 32.088179, lng: 34.790144 },
      markers: [
        {
          position: {
            lat: 32.088179,
            lng: 34.790144,
          },
        },
        {
          position: {
            lat: 32.066278,
            lng: 34.830301,
          },
        },
        {
          position: {
            lat: 32.093869,
            lng: 34.882401,
          },
        }, // Along list of clusters
      ],
    }
  },
  methods: {
    toLinkedin() {
      console.log("object")
      window.location.href = "https://www.linkedin.com/in/alon-kolker-43ba2815b"
    },
  },
}
</script>
