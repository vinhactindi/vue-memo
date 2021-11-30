const _storage = window.localStorage;
const _str_key = "memos";

const _memos = [
  { id: 1, text: "iPad 4 Mini" },
  { id: 2, text: "H&M T-Shirt White" },
  { id: 3, text: "Charli XCX - Sucker CD" },
];

export default {
  getMemos(cb) {
    if (_storage.getItem(_str_key)) {
      try {
        cb(JSON.parse(_storage.getItem(_str_key)));
      } catch (e) {
        _storage.removeItem(_str_key);
      }
    } else {
      cb(_memos);
    }
  },

  setMemos(data) {
    const parsed = JSON.stringify(data);
    _storage.setItem(_str_key, parsed);
  },
};
