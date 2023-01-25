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

  <section class="container mx-auto max-w-6xl pt-16 min-h-screen ">
    <nav aria-label="Back">
      <nuxt-link to="/" class="py-2 text-sm font-medium">
        Back to <b>Job Board</b>
      </nuxt-link>
    </nav>
  <StoryblokComponent v-if="story" :blok="story.content" />


  </section>



</template>
