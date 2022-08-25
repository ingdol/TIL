<template>
  <div style="height: 500px">
    <select-box
      :options="yearOptions"
      placeholder="연도 선택"
      @fetch-option="yearSelect"
      :selectValue="yearSelectValue"
    ></select-box>
    <select-box
      :options="monthOptions"
      placeholder="월 선택"
      @fetch-option="monthSelect"
      :selectValue="monthSelectValue"
      :setValue="setMonthValue"
    ></select-box>
    <select-box
      :options="dayOptions"
      placeholder="일 선택"
      @fetch-option="daySelect"
      :selectValue="daySelectValue"
      :setValue="setDayValue"
    ></select-box>
  </div>
</template>
<script>
import SelectBox from "./SelectBox.vue";
export default {
  components: { SelectBox },
  name: "SelectComponet",
  data() {
    return {
      yearSelectValue: "",
      monthSelectValue: "",
      daySelectValue: "",
      setMonthValue: false,
      setDayValue: false,
    };
  },
  computed: {
    yearOptions() {
      const options = [
        {
          name: "2022년",
          val: 1,
        },
        {
          name: "2021년",
          val: 2,
        },
        {
          name: "2020년",
          val: 3,
        },
      ];
      return options;
    },
    monthOptions() {
      const options = [
        {
          name: "1월",
          val: 1,
        },
        {
          name: "2월",
          val: 2,
        },
        {
          name: "3월",
          val: 3,
        },
      ];
      return options;
    },
    dayOptions() {
      const options = [
        {
          name: "1일",
          val: 1,
        },
        {
          name: "2일",
          val: 2,
        },
        {
          name: "3일",
          val: 3,
        },
      ];
      return options;
    },
  },
  created() {},
  methods: {
    yearSelect(data) {
      console.log(data);
      this.setMonthValue = true;
    },
    monthSelect(data) {
      console.log(data);
      this.setMonthValue = false;
      this.setDayValue = true;
    },

    daySelect(data) {
      console.log(data);
      this.setDayValue = false;
    },
  },
};
</script>
<style lang="scss" scoped></style>
