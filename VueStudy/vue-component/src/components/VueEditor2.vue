<template>
  <div>
    <div id="main">
      <mavon-editor v-model="value" />
      {{ value }}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>
<style lang=""></style>
