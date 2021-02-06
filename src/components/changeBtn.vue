<template>
    <div>
        <el-dialog
        title="切换组件"
        :visible.sync="dialogVisible"
        :append-to-body="true"
        width="30%"
        >
        <div class="radios" v-for="item in list" :key="item.index">
             <el-radio  v-model="name" :label="item.value" border>{{item.name}}</el-radio>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="changeName">确 定</el-button>
        </span>
        </el-dialog>
        <img class="btn" src="../assets/img/6.png" alt="" @click="dialogVisible = true">
    </div>
</template>

<script>
    export default {
        name:'changeBtn',
        props: {
            compName: {
                type: String,
            },
            nameId: {
                type: String,
            },
        },
        mounted () {
            this.name = this.compName;
        },
        data() {
            return {
                dialogVisible: false,
                name:'',
                list:[
                    {name:'物业缴费',value:'propertyPayment'},
                    {name:'基础信息',value:'baseInfo'},
                    {name:'工单信息',value:'orderInfo'},
                    {name:'服务信息',value:'serviceInfo'},
                    {name:'设备状态',value:'deviceStat'},
                    {name:'告警事件',value:'alarmEvent'},
                    {name:'人口管控',value:'peopleControl'},
                    {name:'车辆管控',value:'carControl'},
                    {name:'重点管控',value:'pointControl'},
                    {name:'房屋管控',value:'houseControl'},
                ]
            }
        },
        methods: {
            changeName() {
                this.$store.commit('changeName',{
                    name:this.nameId,
                    value:this.name
                })
                this.dialogVisible = false
            }
        },
    }
</script>

<style lang="scss" scoped>
    .btn{
        width: 1.56vw;
        cursor: pointer;
    }
    .radios{
        display: inline-block;
        margin: 10px;
    }
</style>