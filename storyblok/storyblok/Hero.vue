<template>


  <header class="hero relative w-full ">
    <nuxt-img class="w-full h-[600px]" :src="blok.background.filename" format="webp"/>
<div class="absolute w-full top-1/3 ">
  <div class="mx-auto flex flex-col w-full items-center text-jobs-yellow-contrast">
    <h1 class="text-7xl font-bold py-2">{{blok.title}}</h1>
    <h2 class="text-5xl font-semibold py-4">{{blok.second_title}}</h2>
    <p class="text-2xl py-2">{{blok.description}}</p>
  </div>
</div>

  </header>
</template>

<script setup lang="ts">

defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }

})
</script>
