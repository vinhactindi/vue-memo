<template>
  <div id="app">
    <div class="row">
      <div class="column left">
        <memo-list />
      </div>
      <div class="column right">
        <memo-area />
      </div>
    </div>
  </div>
</template>

<script>
import MemoArea from "./components/MemoArea.vue";
import MemoList from "./components/MemoList.vue";

export default {
  components: {
    MemoList,
    MemoArea,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

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

.column {
  float: left;
  padding: 10px;
}

.left {
  width: 30%;
}

.right {
  width: 70%;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}
</style>
