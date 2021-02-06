<template>
  <div :class="['home',isFull?'full':'']">
    <div class="mb"></div>
    <div class="frame">
      <iframe width="100%" height="100%"  src="http://www.beone3d.com/Scene?c2NlbmVfaWQ9MTAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMjY4MQ==" frameborder="0"></iframe>
    </div>
    <div class="content">
      <my-title></my-title>
      <div class="left">
        <component class="comp" :is="$store.state.name1" nameId="name1"></component>
        <component class="comp" :is="$store.state.name2" nameId="name2"></component>
        <component class="comp" :is="$store.state.name3" nameId="name3"></component>
      </div>
      <div class="right">
        <component class="comp" :is="$store.state.name4" nameId="name4"></component>
        <component class="comp" :is="$store.state.name5" nameId="name5"></component>
        <component class="comp" :is="$store.state.name6" nameId="name6"></component>
      </div>
    </div>
  </div>
</template>

<script>
import myTitle from '../components/myTitle'
import propertyPayment from '../components/propertyPayment'
import baseInfo from '../components/baseInfo'
import orderInfo from '../components/orderInfo'
import serviceInfo from '../components/serviceInfo'
import deviceStat from '../components/deviceStat'
import alarmEvent from '../components/alarmEvent'
import peopleControl from '../components/peopleControl'
import carControl from '../components/carControl'
import pointControl from '../components/pointControl'
import houseControl from '../components/houseControl'
export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    myTitle,propertyPayment,baseInfo,orderInfo,serviceInfo,deviceStat,alarmEvent,
    peopleControl,carControl,pointControl,houseControl
  },
  computed: {
    isFull() {
      let explorer = window.navigator.userAgent.toLowerCase();
              if(explorer.indexOf('chrome')>0){//webkit
                  if (document.body.scrollHeight === window.screen.height && document.body.scrollWidth === window.screen.width) {
                      return true;
                  } else {
                      return false;
                  }
              }else{//IE 9+  fireFox
                  if (window.outerHeight === window.screen.height && window.outerWidth === window.screen.width) {
                      return true;
                  } else {
                      return false;
                  }
              }
      },
  },
}
</script>
<style lang="scss" scoped>
  .home{
    height: 53vw;
    min-height: 100vh;
    //background: cornflowerblue;
  }
  .full{
    height: 100vh;
  }
  .left{
    float: left;
    margin:0px 0 0 20px;
  }
  .right{
    float: right;
    margin:0px 20px 0 0px;
  }
  .comp{
    margin-top:.5vw
  }
  .content{
    position: relative;
    z-index: 2;
    padding-top: 5px;
  }
  .frame{
    position: absolute;
    width: 100%;
    min-height: 100vh;
    height: 53vw;
  }
  .mb{
    position: absolute;
    width: 100%;
    min-height: 100vh;
    height: 53vw;
    z-index: 1;
    background: url(../assets/img/mbImg.png) no-repeat;
    pointer-events: none;
  }
  
</style>
