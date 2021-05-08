<template>
  <div id="app">
    <NavBar />
    <main role="main" class="mt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>
<script>
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
