<template>
  <p>Please wait redirecting...</p>
</template>

<script>
export default {
  mounted() {
    this.$router.replace('/login')
  },
}
</script>
