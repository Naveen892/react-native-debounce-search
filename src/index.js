class useDebounce {
  handler;
  constructor() {}
  add(callback, delay) {
    handler = setTimeout(() => {
      if (callback) {
        callback();
      }
    }, delay);
  }
  remove() {
    clearTimeout(handler);
  }
}
export default new useDebounce();
