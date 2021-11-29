<template>
  <section>
    <textarea v-model="text" rows="4" cols="50"></textarea>
    <div>
      <button @click="saveMemo({ id, text })">Save</button>
      <button @click="removeMemo(id)">Remove</button>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      id: (state) => state.memos.selected?.id,
    }),
    text: {
      get() {
        return this.$store.state.memos.selected?.text || "";
      },
      set(text) {
        this.setSelected({ id: this.$store.state.memos.selected?.id, text });
      },
    },
  },
  methods: mapMutations("memos", ["saveMemo", "removeMemo", "setSelected"]),
};
</script>

<style scoped>
</style>
