<template>
    <div>
        <div class="liItem" v-for="(item,index) in data" :key="index">
            <div class="index">{{index+1}}</div>
            <img :src="'data:image/jpg;base64,'+item.panoramaData" alt="">
            <div class="content">{{item.licencePlate}}</div>
            <div class="content">{{item.direction}}</div>
            <div class="content">{{item.reportTime|timeFormat}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'myList3',
        props: {
            data: {
                type: Array,
                default: []
            },
        },
        data() {
            return {
            }
        },
        filters: {
            timeFormat(val) {
                function add0(m){
                    return m<10?'0'+m:m 
                }
                let timeStap = val
                var time = new Date(timeStap);
                var y = time.getFullYear();
                var m = time.getMonth()+1;
                var d = time.getDate();
                var h = time.getHours();
                var mm = time.getMinutes();
                var s = time.getSeconds();
                return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
            },
        }
    }
</script>

<style lang="scss" scoped>
    .liItem{
        width: 20vw;
        height: 3.2vw;
        background: url(../../assets/img/10.png) no-repeat;
        background-size:100% 100% ;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 .53vw;
        color:#fff;
        margin: 0.3vw 0 0 0;
        font-size: 14px;
    }
    .liItem img{
        width:50px;
    }
    .liItem:hover{
        background: url(../../assets/img/11.png) no-repeat;
        background-size:100% 100% ;
    }
</style>