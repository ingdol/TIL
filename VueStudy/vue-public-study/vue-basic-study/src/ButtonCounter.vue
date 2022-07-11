<template>
  <!-- <button @click="count++">당신은 {{ count }} 번 클릭했습니다.</button> -->
  <h4>{{ title }}</h4>
  <h6>{{ greetingMessage }}</h6>
  <button @click="$emit('enlarge-text')">텍스트 확대</button>
  <p>{{ likes }}</p>
  <p>{{ isPublished }}</p>
  <p>{{ commentIds }}</p>
  <p>{{ author }}</p>
  <button @click="$emit('increaseBy', 1)">Increase by 1</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  props: {
    title: String,
    greetingMessage: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
  },
  emits: ['enlarge-text'],
}
</script>
