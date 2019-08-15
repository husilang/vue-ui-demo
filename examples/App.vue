<template>
  <div id="app">
    <mainSkeleton v-if="!init"></mainSkeleton>
    <div v-else>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/skeleton">Skeleton</router-link>
      </div>
      <router-view/>
    </div>
  </div>
</template>
<script>
  import mainSkeleton from './main.skeleton'
  export default {
      name: 'app',
      components: {
          mainSkeleton
      },
      data() {
          return {
              init: false,
          }
      },
      mounted() {
          setTimeout(() => {
              this.init = true;
          }, 250)
      }
  }
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
