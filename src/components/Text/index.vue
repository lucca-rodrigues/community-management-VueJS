<template>
  <p class="text-black">
    {{ text }}
  </p>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    },
  }
};

</script>
