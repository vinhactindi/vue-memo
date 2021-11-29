<template>
  <div id="app">
    <memo-list />
    <memo-area />
  </div>
</template>

<script>
import MemoArea from './components/MemoArea.vue';
import MemoList from "./components/MemoList.vue";

export default {
  components: {
    MemoList,
    MemoArea,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-right: auto;
  margin-left: auto;
  max-width: 720px;
}
</style>
