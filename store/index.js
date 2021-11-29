import Vue from "vue";
import Vuex from "vuex";
import local from "../api/local";
import memos from "./modules/memos";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    memos,
  },
});

store.watch(
  (state) => state.memos.all,
  (memos) => {
    local.setMemos(memos);
  }
);

export default store;
