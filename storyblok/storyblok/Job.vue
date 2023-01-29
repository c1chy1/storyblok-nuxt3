<template>
  <section class="container mx-auto max-w-6xl pt-16 min-h-screen ">
  <div

      v-editable="blok"

      class="rounded-[5px] text-left mx-auto"
  >

    <nav aria-label="Back">
      <nuxt-link to="/" class="py-2 text-sm font-medium">
        Back to <b>Job Board</b>
      </nuxt-link>
    </nav>
    <h3 class="text-4xl text-[#1d243d] font-semibold py-12">

      {{ blok.title }}

    </h3>
    <h2 class="w-3/4">{{blok.description}}</h2>
    <span class="block mt-4">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800">
          💰 {{ blok.salary }}
        </span>
      </span>

    <button type="button" class="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      Apply now
    </button>
  </div>
  </section>
</template>



<script lang="ts" setup>

defineProps(
    {
      blok: {
        type:Object,
        required: true}})

</script>
