<template>
  <div>
    <span
      class="mr-2 grey lighten-3 rounded pa-1 caption grey--text text--darken-2"
    >
      {{ sub }}
    </span>
    <span class="caption"> {{ main }} </span>
  </div>
</template>

<script>
export default {
  props: {
    main: String,
    sub: String,
  },
}
</script>