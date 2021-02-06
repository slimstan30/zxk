<template>
    <div class="main">
        <my-header class="time"></my-header>
        <img class="fullscreen" src="../assets/img/1.png" alt="" @click="screenfull()">
        <div class="title">智慧社区综合信息服务管理平台</div>
        <setting-btns class="btns"></setting-btns>
    </div>
</template>

<script>
    import myHeader from './myHeader'
    import settingBtns from './settingBtns'
    import screenfull from 'screenfull'
    export default {
        name:'mTitle',
        components: {
            myHeader,settingBtns,
        },
        data() {
            return {
                isFullscreen:false
            }
        },
        methods: {
            screenfull() {
                if (!screenfull.isEnabled) {
                this.$message({
                message: '当前浏览器不支持',
                type: 'warning',
                duration:1000,
                showClose:true
                })
                return false
                }
                screenfull.toggle()
                this.isFullscreen = true
            },
            
        },
    }
</script>

<style lang="scss" scoped>
    .main{
        width: 98vw;
        height: 5vw;
        margin:20px 0 10px 0;
        background: url(../assets/img/top.png) no-repeat;
        background-size: contain;
        position: relative;
    }
    .title{
        position: absolute;
        top: 0.7vw;
        left: 39vw;
        font-size: 1.8vw;
        color:#0cf;
        letter-spacing: 2px;
    }
    .time{
        position: absolute;
        top: 1.7vw;
        left: 5vw;
    }
    .btns{
        position: absolute;
        top: 1.2vw;
        right: 1vw;
    }
    .fullscreen{
        width:3vw;
        position: absolute;
        top: 2.1vw;
        right: 17.9vw;
        cursor: pointer;
    }
</style>