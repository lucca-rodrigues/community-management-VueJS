<template>
  <h1 class="text-h4 text-weight-bold text-black">
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
