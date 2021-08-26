<template>
  <h1 class="text-h6 text-black">
    {{ title }}
  </h1>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
  }
};

</script>
