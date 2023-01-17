<template></template>

<script setup lang="ts">
const { WEBSITE_URL } = useRuntimeConfig();
const props = defineProps<{
  title: string;
  description: string;
}>();
useHead({
  title: props.title,
  htmlAttrs: {
    lang: 'de',
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: props.description,
    },
  ],
});
</script>
