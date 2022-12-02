<template>
  <header>
    <h1>{{ headerText }}</h1>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['headerText'])
  }
}
</script>

<style scoped>
h1 {
  color: #2F3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>
