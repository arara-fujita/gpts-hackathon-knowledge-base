<script setup lang="ts">
const props = defineProps<{
  src: String
  alt?: String
  caption?: String
  quoteText?: String
  quoteUrl?: String
}>()

</script>

<template>
<figure>
  <img :src :alt />
  <figcaption>
    <span v-if="!!caption">{{ caption }}</span>
    <span v-if="!!quoteText && !!quoteUrl">
      （<a :href="quoteUrl">{{ quoteText }}</a>より引用）
    </span>
  </figcaption>
</figure>
</template>
