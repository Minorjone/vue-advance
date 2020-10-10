<template>
  <div id="app">
    <Main></Main>
    <router-link to="/">Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import Main from './components/index'
export default {
  name: 'App',
  components: { Main }
}
</script>

<style>
</style>
