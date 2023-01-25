<template>

  <div

      v-editable="blok"

      class="w-full p-12 bg-[#f7f6fd] rounded-[5px] text-center"

  >

    <img
        :alt="blok.assets.alt"
        class="w-full h-48 xl:h-72 object-cover"
        :src="blok.assets.filename"
    />


    <h3 class="text-2xl text-[#1d243d] font-bold">

      {{ blok.name }}

    </h3>
<h1>{{blok}}</h1>

  </div>

</template>



<script lang="ts" setup>

defineProps(
    {
      blok: {
        type:Object,
        required: true}})

</script>
