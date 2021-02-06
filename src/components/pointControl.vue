<template>
    <div class="compBox">
        <comp-title text="重点管控"></comp-title>
        <change-btn class="changeBtn" :nameId="nameId" compName='pointControl'></change-btn>
        <!-- <div class="flexBox">
            <div @click="changeEvent(index)" :class="['item',curIndex==index?'check':'']" v-for="(item,index) in events" :key="index">{{item.label}}</div>
        </div> -->
        <div class="line"></div>
        <my-list4 class="list" :data="listData.slice(0,5)"></my-list4>
    </div>
</template>

<script>
    import compTitle from'./compTitle'
    import changeBtn from'./changeBtn'
    import myList4 from'./otherComp/myList4'
    export default {
        name:'pointControl',
        components: {
            compTitle,changeBtn,myList4
        },
        props: {
            nameId: {
                type: String,
                default:'' 
            },
        },
        data() {
            return {
                curIndex:0,
                events:[
                    {name:'people',label:'重点人员'},
                    {name:'car',label:'重点车辆'},
                ],
                listData: [
                ]
            }
        },
        mounted () {
            this.getData();
        },
        methods: {
            async getData() {
                const res = await this.$http.post('/faceCapture/blackList/pageList')
                if(res.data.status==200){
                    this.listData = res.data.data.list
                }
            },
            changeEvent(i) {
                this.curIndex = i
            }
        },
    }
</script>

<style lang="scss" scoped>
    .compBox{
        width: 20.31vw;
        height: 15vw;
        position: relative;
    }
    .changeBtn{
        position: absolute;
        top: 0vw;
        right: 0;
    }
    .list{
        margin: .5vw 0 0 0.7vw;
    }
    .flexBox{
        display: flex;
        width: 70%;
        margin: 0 auto;
        margin-top: 20px;
        justify-content: space-between;
    }
    .line{
        width: 100%;
        height: 0.5vw;
        background: url(../assets/img/line.png) no-repeat;
        // background-size: 100% 100%;
    }
    .item{
        padding: 0.2vw 1.25vw;
        color:#0cf;
        border-radius: 5px;
        cursor: pointer;
    }
    .check{
        color:#fff;
        border:#2a5cdb 1px solid;
        box-shadow: rgb(28, 68, 169) 0px 0px 20px inset;
    }
</style>