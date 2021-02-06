<template>
    <div class="eventList">
        <el-dialog
        title="详情"
        :visible.sync="dialogVisible"
        :append-to-body="true"
        width="30%"
        >
            <el-form>
                <el-form-item class="formItem" label="设备位置:">{{detail.location}}</el-form-item>
                <el-form-item class="formItem"  label="设备名称:">{{detail.deviceName}}</el-form-item>
                <el-form-item class="formItem"  label="设备Mac:">{{detail.deviceMac}}</el-form-item>
                <el-form-item class="formItem"  label="报警类型:">{{detail.alarmContent}}</el-form-item>
                <el-form-item class="formItem"  label="报警时间:">{{detail.alarmTime|timeFormat}}</el-form-item>
                <el-form-item class="formItem"  label="报警时间:">{{detail.infoStatus|statFormat}}</el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
        <div class="liItem" v-if="data.length==0">
            <div class="index">1</div>
            <div class="emptyLi" >暂无数据</div>
        </div>
        <div class="liItem" v-else v-for="(item,index) in data" :key="index">
            <div class="index">{{index+1}}</div>
            <div class="content" >{{item.alarmContent}}</div>
            <div class="content" >{{item.deviceName}}</div>
            <div class="content" >{{item.alarmTime|timeFormat}}</div>
            <div class="content" >{{item.infoStatus|statFormat}}</div>
            <span style="cursor:pointer" @click="showDetail(item)">详情</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'eventList',
        props: {
            data: {
                type: Array,
                default: []
            },
        },
        data() {
            return {
                dialogVisible:false,
                detail:{}
            }
        },
        computed: {
            list() {
                if(this.data.slice){
                    return this.data.slice(0,5)
                }
            }
        },
        methods: {
            showDetail(i) {
                this.dialogVisible = true
                this.detail = i
            }
        },
        filters: {
            statFormat(v) {
                return v==0?'未处理':'已处理';
            },
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
        margin: 0.3vw 0 0 0.5vw;
        font-size: 12px;
    }
    .formItem /deep/ label.el-form-item__label{
        color:#fff
    }
    .emptyLi{
        width: 100%;
        text-align: center;
    }
</style>