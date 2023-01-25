<template>


  <section class="text-center max-w-3xl mx-auto">
    <h1 class="text-5xl font-bold py-8 text-jobs-cyan-shade">{{blok.title}}</h1>
<div class="shadow overflow-hidden sm:rounded-md ">
    <ul role="list" >
      <li v-for="job in jobs" class="">
      <nuxt-link :to="job.full_slug" class="text-2xl block hover:bg-gray-50 px-4">
<div class="flex justify-between py-3">
      <h2>{{job.name}}</h2>


      <h3 class="px-2 text-xs py-2 font-semibold rounded-full bg-green-100 text-green-800">{{job.content.salary}}</h3>



</div>
      </nuxt-link>
     </li>
    </ul>
</div>

  </section>



</template>

<script setup lang="ts">

defineProps({
  blok: {
    type: Object,
    default: () => ({})
  }

})


const { jobs, fetchJobs } = useJobs()

await fetchJobs()


console.log(jobs)
</script>

