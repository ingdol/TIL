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
</template>

<script>
import CubeSpin from "../src/components/CubeCube.vue";
import axios from "axios";

export default {
  components: {
    CubeSpin,
  },
  name: "App",
  data() {
    return {
      cnt: [0, 0, 0],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      content: ["Home", "About", "Detail"],
      isLodding: false,
    };
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
