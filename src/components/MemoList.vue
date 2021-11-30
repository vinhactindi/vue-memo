<template>
  <ul>
    <li
      class="new-memo"
      v-bind:class="{ active: !selected.id }"
      @click="setSelected()"
    >
      New Memo
    </li>
    <li
      v-for="memo in memos"
      :key="memo.id"
      v-bind:class="{ active: memo.id === selected.id }"
      @click="setSelected(memo)"
    >
      {{ memo.text | title }}
    </li>
  </ul>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: mapState({
    memos: (state) => state.memos.all,
    selected: (state) => state.memos.selected,
  }),
  methods: mapMutations("memos", ["setSelected"]),
  created() {
    this.$store.dispatch("memos/getAllMemos");
  },
};
</script>

<style scoped>
li {
  cursor: pointer;
  margin: 0px;
  padding: 8px;
}
li.active {
  font-weight: 600;
  background-color: #ededb4 !important;
}
li:hover {
  background-color: #c4c7cc;
}
li:not(:last-child) {
  border-bottom: 1px solid;
}
ul {
  list-style-type: none;
  border: 1px solid;
  margin: 0;
  padding: 0px;
  border-radius: 5px;
  overflow: hidden;
}
.new-memo {
  text-align: center;
}
</style>
