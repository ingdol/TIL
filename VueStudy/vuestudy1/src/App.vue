<template>
  <div v-for="item in content" :key="item">{{ item }}</div>
  <div v-for="(prd, i) in products" :key="i">
    <div>
      <h4>{{ prd }}</h4>
      <p>{{ i + 1 }}만원</p>
    </div>
  </div>

  <div>
    <h4>{{ products[0] }}</h4>
    <p>XX 만원</p>
    <button @click="increase(0)">신고하기</button>
    <span>{{ cnt[0] }}</span>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>XX 만원</p>
    <button @click="increase(1)">신고하기</button>
    <span>{{ cnt[1] }}</span>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>XX 만원</p>
    <button @click="increase(2)">신고하기</button>
    <span>{{ cnt[2] }}</span>
  </div>
  <button @click="more">더보기</button>
  <div v-if="isLodding === true">
    <cube-spin></cube-spin>
  </div>
  <div>
    <!-- <vue-daum-map
      :appKey="appKey"
      v-bind:center="center"
      v-bind:level="level"
      :mapTypeId="mapTypeId"
      :libraries="libraries"
      @load="onLoad"
      style="width: 500px; height: 400px"
    /> -->
    <!-- <div class="kmap" ref="map"></div> -->
    <KakaoMap :options="mapOption" />
  </div>
</template>

<script>
import CubeSpin from "../src/components/CubeCube.vue";
import axios from "axios";
// import VueDaumMap from "vue-daum-map";
import KakaoMap from "./components/KakaoMap.vue";

export default {
  components: {
    CubeSpin,
    // VueDaumMap,
    KakaoMap,
  },
  name: "App",
  data() {
    return {
      cnt: [0, 0, 0],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      content: ["Home", "About", "Detail"],
      isLodding: false,
      // appKey: "204b08cdfcfe22a4120c9d729cd589d8", // 테스트용 appkey
      // center: { lat: 33.450701, lng: 126.570667 }, // 지도의 중심 좌표
      // level: 3, // 지도의 레벨(확대, 축소 정도),
      // mapTypeId: VueDaumMap.MapTypeId.NORMAL, // 맵 타입
      // libraries: [], // 추가로 불러올 라이브러리
      // map: null, // 지도 객체. 지도가 로드되면 할당됨.
      // daum: null, // 다음 API 객체. 지도가 로드되면 할당됨.
      mapOption: {
        center: {
          lat: 33.450701,
          lng: 126.570667,
        },
        level: 3,
      },
    };
  },
  mounted() {
    // let kakao = window.kakao;
    // console.log(this.$refs.map);
    // let container = this.$refs.map;
    // let options = {
    //   center: new kakao.maps.LatLng(33.450701, 126.570667),
    //   level: 6,
    // };
    // const mapInstance = new kakao.maps.Map(container, options);
    // console.log(mapInstance);
    // let markerPosition = new kakao.maps.LatLng(33.450701, 126.570667);
    // let marker = new kakao.maps.Marker({
    //   position: markerPosition,
    // });
    // marker.setMap(mapInstance);
  },
  methods: {
    increase(i) {
      this.cnt[i] += 1;
    },
    more() {
      this.isLodding = true;
      axios
        .get("https://codingapple1.github.io/vue/more0.json")
        .then(result => {
          this.isLodding = false;
          console.log(result);
        });
    },
    // onLoad(map, daum) {
    //   this.map = map;
    //   this.daum = daum;
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
