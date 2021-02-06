<template>
    <div>
        <div class="flexbox">
            <small-pie :id="nameId" :total="oriData.length" :value='completeNum' stat="已处理" type="blue"></small-pie>
            <small-pie :id="nameId+'2'" :total="oriData.length" :value='unCompleteNum' stat="未处理" type="yellow"></small-pie>
        </div>
        <el-dialog
        title="详情"
        :visible.sync="dialogVisible"
        :append-to-body="true"
        width="30%"
        >
        <el-form>
            <el-form-item label="工单编号">{{detail.applyCode}}</el-form-item>
            <el-form-item label="创建时间">{{detail.createTime|timeFormat}}</el-form-item>
            <el-form-item label="工单类型">{{nameFormat(detail.dictionaryId)}}</el-form-item>
            <el-form-item label="工单内容">{{detail.applyContent}}</el-form-item>
            <el-form-item label="处理状态">{{detail.applyState|statFormat}}</el-form-item>
            <el-form-item label="处理人员">{{detail.auditName}}</el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
        <div class="header">
           <div :class="['th',`w${index+1}`]" v-for="(item,index) in labels" :key="item">{{item}}</div>
        </div>
        <div class="main">
            <div v-if="listData.length==0" class="column">
                <div>暂无数据</div>
            </div>
            <div v-else class="column" v-for="(item,index) in listData" :key="index">
                <div class="w1">{{item.applyCode}}</div><div class="w2">{{nameFormat(item.dictionaryId)}}</div><div class="w3">{{item.createTime|timeFormat}}</div>
                <div :class="['w4',item.applyState]">{{item.applyState|statFormat}}</div><div class="w5" ><button class="btn" @click="showDetail(item)">详情</button></div>
            </div>
        </div>
    </div>
</template>

<script>
    import smallPie from '../charts/smallPie'
    export default {
        name:'myTable',
        props: {
            nameId: {
                type: String,
                default:'' 
            },
        },
        components: {
            smallPie,
        },
        data() {
            return {
                dialogVisible:false,
                detail:{},
                typeList:[],
                //listData只展示前五条
                listData:[],
                //oriData为完整数据
                oriData:[],
                labels:['工单编号','类别','创建时间','状态','操作'],
            }
        },
        computed: {
            completeNum() {
                return this.oriData.filter(item=>{
                    return item.applyState =='complete'
                }).length
            },
            unCompleteNum() {
                return this.oriData.length
            },
        },
        mounted () {
            this.getTypes();
            this.getList();
        },
        methods: {
            showDetail(i) {
                this.detail = i
                this.dialogVisible = true
            },
            async getTypes() {
                // const res = await this.$http.get('http://192.168.60.249:9877/workerorder/apply/getDictionaries/all')
                const res = await this.$http.get('/workerorder/apply/getDictionaries/all')
                if(res.data.status==200){
                    this.typeList = res.data.data
                }
            },
            
            async getList() {
                const res = await this.$http.post('/workerorder/apply/pageAllList',{})
                // const res = await this.$http.post('http://192.168.60.249:9877/workerorder/apply/pageAllList',{})
                if(res.data.status==200){
                    let arr = res.data.data.list
                    this.oriData = res.data.data.list
                    this.listData = arr.slice(0,5)
                }
            },
            nameFormat(id){
                let item = this.typeList.find(item=>{return item.dictionaryId==id})
                if(item){
                    return item.dictionaryName
                }else{
                    return ''
                }
                
            },
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
            statFormat: function(value) {
                switch (value){
                    case'processing':
                        return '处理中';break;
                    case'unprocessed':
                        return '未处理';break;
                    case'pending_review':
                        return '待审核';break;
                    case'overdue':
                        return '已超时';break;
                    case'complete':
                        return '已处理';break;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.flexbox{
        display: flex;
        width: 60%;
        justify-content: space-between;
    }
.th{
    display: inline-block;
    
    padding: 5px 4px;
    font-size: 10px;
    color: #07c7da;
    text-align: center;
    
}
.header{
    display: flex;
    justify-content: space-around;
    background: rgba($color: #182d54, $alpha: .8);
    border:#1c44a9 1px solid;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.column{
    display: flex;
    justify-content: space-around;
    font-size: 10px;
    color:#fff;
    text-align: center;
    padding: 5px 0;
    background: transparent;
    border:#1c44a9 1px solid;
    margin-top: -1px;
    div{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
}
.w1{
    width: 15%;
    
}
.w2{
    width:20%;
}
.w3{
    width:33%;
}
.w4{
    width:12%;
}
.w5{
    width:15%;
}
.btn{
    cursor: pointer;
    outline: none;
    background: #102d50;
    border-radius: 10px;
    padding: 2px 8px;
    border: none;
    color:#006eff;
    font-size: 10px;
}
.inProgress{
    color:#18c477
}
.waiting{
    color:#e98d03
}
.outofTime{
    color:#ff3333
}
.already{
    color:#04daea
}
.el-form /deep/ label.el-form-item__label{
        color:#fff
    }
</style>