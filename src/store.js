import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name1: 'propertyPayment',
    name2:'baseInfo',
    name3:'orderInfo',
    name4: 'serviceInfo',
    // name1: 'peopleControl',
    // name2:'carControl',
    // name3:'pointControl',
    // name4: 'houseControl',
    name5:'deviceStat',
    name6:'alarmEvent',
  },
  mutations: {
    changeName (state,{name,value}) {
      state[name]=value
    }
  }
})

export default store