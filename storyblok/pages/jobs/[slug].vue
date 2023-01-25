<script setup>


const route = useRoute()

const slug = route.params.slug
const storyblokApi = useStoryblokApi();

const { data } = await storyblokApi.get('cdn/stories/', {
  version: 'draft',
  starts_with: "jobs/",
  by_slugs: "jobs/" + slug,

});
const story = data.stories[0];

</script>



<template>

  <section class="container mx-auto max-w-6xl mt-16">
  <button @click="this.$router.go(-1)">
    Back to <span class="font-bold">Job Board</span>
  </button>
  <StoryblokComponent v-if="story" :blok="story.content" />


  </section>



</template>
