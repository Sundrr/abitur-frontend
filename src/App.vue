<template lang="pug">
router-view(:key="$route.path")
</template>


<script>
export default {};
</script>


<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  font-family: Verdana, Arial, Helvetica, sans-serif;
  margin: 0;
}

a {
  text-decoration: none;
  color: #000;
}

p {
  margin: 0;
}

ul {
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
}
</style>
