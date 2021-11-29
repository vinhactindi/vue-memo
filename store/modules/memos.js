import local from "../../api/local";
import { v4 as uuid } from "uuid";

const initialSelected = {
  id: undefined,
  text: "",
};

const state = () => ({
  all: [],
  selected: initialSelected,
});

const getters = {};

const actions = {
  getAllMemos({ commit }) {
    local.getMemos((memos) => {
      commit("setMemos", memos);
    });
  },
};

const mutations = {
  setMemos(state, memos) {
    state.all = memos;
  },
  setSelected(state, selected) {
    if (selected) state.selected = selected;
    else state.selected = initialSelected;
  },
  saveMemo(state, memo) {
    if (!memo?.id) {
      state.all.unshift({ id: uuid(), text: memo.text });
    } else {
      const updateMemo = state.all.find((m) => m.id === memo.id);

      if (updateMemo) updateMemo.text = memo.text;
    }
  },
  removeMemo(state, id) {
    state.all = state.all.filter((memo) => memo.id !== id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
