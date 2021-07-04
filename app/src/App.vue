<template>
    <div id="app">
      <header-d v-if="$mq === 'lg'"></header-d>
      <header-m v-if="$mq === 'md'"></header-m>
    </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">

* {
    box-sizing: border-box;
    font-family: monospace;
}

body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
}
</style>
