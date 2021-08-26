<template>
  <div>
    <q-img
      :src="logo"
      height="100"
    />
    <img src="~/assets/logo.svg" alt="">
  </div>
</template>

<script>
export default {
    data() {
        return {
            logo: '~/assets/logo.svg'
        }
    }
}
</script>
