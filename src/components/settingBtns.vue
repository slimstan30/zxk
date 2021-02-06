<template>
    <div class="box">
        {{time}}
    </div>
</template>

<script>
    export default {
        name:'settingBtns',
        mounted () {
            setInterval(()=>{this.getTime()},1000);
        },
        data() {
            return {
                time: ''
            }
        },
        methods: {
            getTime() {
                function add(v){
                    return v<10?'0'+v:v
                }
                let date = new Date()
                let hour = date.getHours(),
                min = date.getMinutes(),
                second = date.getSeconds()
                this.time =  `${add(hour)}:  ${add(min)}:  ${add(second)}`

            }
        },
    }
</script>

<style lang="scss" scoped>
    .box{
        width: 11vw;
        height: 2vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color:#00ccff;
        font-weight: 550;
        letter-spacing: 5px;
    }
    img{
        cursor: pointer;
    }
    .sImg{
        width: 1.8vw;
    }
    .bImg{
        width:2.2vw;
    }
</style>