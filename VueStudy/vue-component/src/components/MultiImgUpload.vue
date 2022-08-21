<template>
  <div class="multi-img-upload">
    {{ imgUrl }}
    <input type="file" multiple accept="image/*" @change="upload" />
    <div class="multi-img-upload__list">
      <draggable
        v-model="imgUrl"
        group="people"
        @start="drag = true"
        @end="drag = false"
        item-key="imgUrl"
      >
        <template #item="{ element }">
          <div>
            <img
              style="width: 100px; height: 100px"
              :src="element"
              @click="imgPreview(index)"
            />
            <div @click="delImage(index)">X</div>
          </div>
        </template>
      </draggable>
    </div>
    <div v-if="preview.state">
      <img style="width: 100px; height: 100px" :src="preview.img" />
    </div>
  </div>
</template>

<script>
// https://github.com/SortableJS/Vue.Draggable
import draggable from "vuedraggable";

export default {
  name: "MultiImgUpload",
  data() {
    return {
      list: [
        { name: "John", id: 0 },
        { name: "Joao", id: 1 },
        { name: "Jean", id: 2 },
      ],
      drag: false,
      imgUrl: [],
      preview: { state: false, img: "" },
    };
  },
  components: {
    draggable,
  },
  computed: {},
  methods: {
    upload(e) {
      let file = e.target.files;
      console.log(file);
      let urlArr = [];
      console.log(file.length);
      if (file.length > 8) {
        console.log("8개 까지 가능함");
        file = "";
        console.log(file);
      } else {
        for (let i = 0; i < file.length; i++) {
          urlArr.push(URL.createObjectURL(file[i]));
        }
      }
      this.imgUrl = urlArr;
      console.log(this.imgUrl);
    },
    delImage(index) {
      this.imgUrl.splice(index, 1);
    },
    imgPreview(index) {
      this.preview.state = true;
      this.preview.img = this.imgUrl[index];
    },
    startDrag(e, img) {
      console.log("여기 실행");
      e.dataTransfer.dropEffect = "move";
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("selectedItem", img);
    },
    onDrop(e) {
      console.log("여기 실행2");
      const selectedItem = e.dataTransfer.getData("selectedItem");
      console.log(selectedItem);
      const item = this.imgUrl.find(item => item === selectedItem);
      console.log(item);
    },
  },
};
</script>

<style lang="scss" scoped>
.multi-img-upload {
  &__list {
    display: flex;
  }
}
</style>
