<template>
  <section>
    <textarea v-model="text"></textarea>
    <div>
      <button @click="saveMemo({ id, text })">Save</button>
      <button @click="removeMemo(id)">{{ id ? "Remove" : "Cancel" }}</button>
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
textarea {
  border: 1px solid;
  border-radius: 5px;
  width: 100%;
  min-height: 500px;
  padding: 10px;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 10px;
}

button {
  border: none;
  border-radius: 5px;
  padding: 5px 8px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #7a7a7a;
  color: #fff;
}

button:not(:last-child) {
  margin-right: 5px;
}
button:not(:first-child) {
  margin-left: 5px;
}
</style>
