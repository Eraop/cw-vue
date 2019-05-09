import store from "./store/store.js";
const isCN = function() {
  return store.state.user.language == "zh-CN";
}; 

export default { isCN };