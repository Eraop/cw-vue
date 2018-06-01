import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex);

import userModule from './modules/userModule.js';

export default new vuex.Store({
    modules: {
        user: userModule
    }
})