<template>
    <div>
        <div class="liItem" v-if="data.length==0">
            <div class="empty">无数据</div>
        </div>
        <div class="liItem" v-for="(item,index) in data.slice(0,5)" :key="index">
            <div class="index">{{index+1}}</div>
            <div class="content">{{item.notifyContent}}</div>
            <div class="content">{{item.createTime|timeFormat}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'myList',
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
        width: 18vw;
        height: 1.63vw;
        background: url(../../assets/img/12.png) no-repeat;
        background-size:100% 100% ;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 .53vw;
        color:#fff;
        margin: 0.3vw 0 0 0;
        font-size: 14px;
    }
    .empty{
        width:100%;
        text-align: center;
    }
    // .liItem:hover{
    //     -webkit-filter: brightness(70%); /* Chrome, Safari, Opera */
    //     filter: brightness(70%);
    // }
    // .index:hover,.content:hover{
    //     -webkit-filter: brightness(100%); /* Chrome, Safari, Opera */
    //     filter: brightness(100%);
    // }
</style>