<template>
  <div class="select-container" v-show="open" @click="open = false"></div>
  <div class="select" :style="detailWidth">
    <input
      :class="
        !selectedOption
          ? 'select__input select__input--placeholder'
          : 'select__input'
      "
      :value="!selectedOption ? placeholder : selectedOption.name"
      :selectValue="selectValue"
      :setValue="setValue"
      readonly
      @click="onClick"
    />
    <!-- <font-awesome-icon
      icon="fa-solid fa-angle-down"
      :class="detailSelect ? 'select__icon--detail' : 'select__icon'"
      v-show="!open"
      @click="onClick"
    />
    <font-awesome-icon
      icon="fa-solid fa-angle-up"
      :class="detailSelect ? 'select__icon--detail' : 'select__icon'"
      v-show="open"
      @click="onClick"
    /> -->
    <ul v-show="open" :style="ulStyle">
      <li
        v-for="(option, i) in options"
        :key="option"
        @click="updateOption(option, i)"
        :class="{ selected: i == selectedItem }"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SelectComponet",
  data() {
    return {
      selectedOption: {},
      open: false,
      selectedItem: null,
      selectData: "",
    };
  },
  watch: {
    selectValue: function (value) {
      console.log("감시", value);
      this.selectedOption = value;
    },
  },
  props: {
    options: {
      type: [Array, Object],
    },
    selected: {},
    placeholder: String,
    selectValue: String,
    ulStyle: String,
    detailSelect: Boolean,
    detailWidth: String,
    setValue: Boolean,
  },
  emits: ["fetchOption"],
  //   computed: {
  //     options() {
  //       const options = [
  //         {
  //           name: '입원',
  //           val: 1,
  //         },
  //         {
  //           name: '퇴원',
  //           val: 2,
  //         },
  //         {
  //           name: '완치',
  //           val: 3,
  //         },
  //       ]
  //       return options
  //     },
  //   },
  created() {
    console.log("여기1", this.selectValue);
    console.log("여기2", this.selectedOption);
    if (this.selectValue) {
      this.selectedOption = this.selectValue;
      console.log("여기3", this.selectedOption);
    } else {
      this.selectedOption = this.selected;
    }
  },
  updated() {
    if (this.setValue) {
      this.selectedOption = 0;
      console.log("여기4", this.selectedOption);
    }
  },
  methods: {
    updateOption(option, i) {
      this.selectedItem = i;
      this.selectedOption = option;
      this.open = false;
      this.$emit("fetchOption", option);
      console.log("여기", this.selectedOption);
    },
    onClick() {
      this.open = !this.open;
    },
  },
};
</script>
<style lang="scss" scoped>
.select-container {
  background: none;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
}
.select {
  //   user-select: none;
  display: inline-block;
  position: relative;
  width: 111px;
  height: 32px;
  line-height: 28px;
  background: #fff;
  border: solid 1px #ececec;
  border-radius: 2px;
  font-size: 14px;

  &__icon {
    position: absolute;
    right: 10%;
    width: 11px;
    height: 100%;
    line-height: 32px;
    cursor: pointer;
    color: #9b9fa7;
    &--detail {
      position: absolute;
      right: 5%;
      width: 11px;
      height: 100%;
      line-height: 32px;
      cursor: pointer;
      color: #9b9fa7;
    }
  }

  &__input {
    cursor: pointer;
    width: 100%;
    height: 100%;
    background: none;
    padding: 0 15px;
    &--placeholder {
      color: rgb(173, 173, 173);
    }
  }
  ul {
    list-style: none;
    position: absolute;
    background: #fff;
    width: 110px;
    height: 69px;
    // box-shadow: 0 0.2em 1.4em 0 rgba(0, 0, 0, 0.2);
    border: solid 1px #ececec;
    border-radius: 2px;
    z-index: 999;
    // overflow: auto;
  }
  li {
    cursor: pointer;
    //color #477dca;
    text-align: left;
    padding: 0 1em;
    line-height: 2.4;
    &.selected {
      color: #000;
    }
    &:hover {
      background: #ececec;
    }
  }
}
</style>
