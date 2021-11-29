<template>
  <ul>
    <li>
      <button @click="setSelected()">New Memo</button>
    </li>
    <li
      v-for="memo in memos"
      :key="memo.id"
      v-bind:class="{ active: memo.id === selected.id }"
      @click="setSelected(memo)"
    >
      {{ memo.text }}
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
}
li.active {
  font-weight: 600;
}
</style>
