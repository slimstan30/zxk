<template>
    <div class="compBox">
        <comp-title text="告警事件"></comp-title>
        <change-btn class="changeBtn" :nameId="nameId" compName='alarmEvent'></change-btn>
        <div class="flexBox">
            <div @click="changeEvent(index)" :class="['item',curIndex==index?'check':'']" v-for="(item,index) in events" :key="index">{{item.label}}</div>
        </div>
        <div class="line"></div>
        <event-list class="list" :data="listData"></event-list>
    </div>
</template>

<script>
    import compTitle from'./compTitle'
    import changeBtn from'./changeBtn'
    import eventList from'./otherComp/eventList'
    export default {
        name:'alarmEvent',
        components: {
            compTitle,changeBtn,eventList
        },
        props: {
            nameId: {
                type: String,
                default:'' 
            },
        },
        mounted () {
            this.getData()
        },
        data() {
            return {
                curIndex:0,
                events:[
                    {name:'comprehensive',label:'综合'},
                    {name:'security',label:'安防'},
                    {name:'fireControl',label:'消防'},
                    {name:'blacklist',label:'黑名单'},
                ],
                listData:[],
                fakeData: [
                    {
                        "id": "139770713736347648",
                        "alarmNumber": "bj202101201600004",
                        "module": "电梯模块",
                        "deviceName": "电梯1",
                        "deviceMac": "000d6f000a8f6979",
                        "location": "1-24楼",
                        "alarmContent": "电池低电压",
                        "infoStatus": 0,
                        "alarmTime": 1611131934000,
                        "readStatus": 0,
                        "dealTime": null,
                        "dealDetail": null
                    },
                    {
                        "id": "140028901278744576",
                        "alarmNumber": "bj202101210900001",
                        "module": "电梯模块",
                        "deviceName": "电梯1",
                        "deviceMac": "000d6f010a8f6979",
                        "location": "1-24楼",
                        "alarmContent": "电池低电压",
                        "infoStatus": 0,
                        "alarmTime": 1611193491000,
                        "readStatus": 0,
                        "dealTime": null,
                        "dealDetail": null
                    },
                    {
                        "id": "139765179079589888",
                        "alarmNumber": "bj2021012016000003",
                        "module": "井盖模块",
                        "deviceName": "井盖",
                        "deviceMac": "000d6f000a8f5379",
                        "location": "小区1号门",
                        "alarmContent": "电池低电压",
                        "infoStatus": 0,
                        "alarmTime": 1611130615000,
                        "readStatus": 0,
                        "dealTime": null,
                        "dealDetail": null
                    }
                ]
            }
        },
        methods: {
            changeEvent(i) {
                this.curIndex = i
            },
            async getData(){
                const res = await this.$http.get('/unAuth/alarm/queryAlarmInfo')
                if(res.data.status==200){
                    this.listData = res.data.data
                }
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
        margin: 0vw 0 0 0.7vw;
    }
    .flexBox{
        display: flex;
        width: 90%;
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