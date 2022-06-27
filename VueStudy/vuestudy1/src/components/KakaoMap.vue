<template>
  <div class="kmap" ref="map"></div>
</template>

<script>
export default {
  props: ["options"],
  mounted() {
    let kakao = window.kakao;
    console.log(this.$refs.map);

    let container = this.$refs.map;
    // let options = {
    //   center: new kakao.maps.LatLng(33.450701, 126.570667),
    //   level: 6,
    // };

    const { center, level } = this.options;
    const mapInstance = new kakao.maps.Map(container, {
      center: new kakao.maps.LatLng(center.lat, center.lng),
      level,
      markerPosition: new kakao.maps.LatLng(center.lat, center.lng),
    });
    console.log(mapInstance);

    let markerPosition = new kakao.maps.LatLng(center.lat, center.lng);

    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(mapInstance);
  },
};
</script>

<style>
.kmap {
  width: 100%;
  height: 600px;
}
</style>
