<template>
<div
    class="h-64 w-full bg-contain"
    :style="`background-image: url(${props.imageLink});`">
<h1 class="text-center text-primary">HEADER</h1>

</div>
</template>





<script setup lang="ts">


interface Props {
  imageLink: string;
}

const props = defineProps<Props>();



</script>
