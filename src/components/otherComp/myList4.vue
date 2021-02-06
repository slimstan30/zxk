<template>
    <div>
        <el-dialog
        title="详情"
        :visible.sync="dialogVisible"
        :append-to-body="true"
        width="30%"
        >
        <el-form class="formItem">
            <el-form-item label="姓名：">{{detail.name}}</el-form-item>
            <el-form-item label="性别：">{{detail.sex}}</el-form-item>
            <el-form-item label="抓拍时间：">{{detail.snapDate}}</el-form-item>
            <el-form-item label="特征描述：">{{detail.feature}}</el-form-item>
            <el-form-item label="摄像头位置：">{{detail.snapChannel}}</el-form-item>
        </el-form>
        <div class="imgs">
             <div class="imgBlock">
                <span>对比图</span>
                <img :src="detail.compareImageBase64" alt="对比图">
            </div>
            <div class="imgBlock">
                <span>人脸图</span>
                <img :src="detail.snapFaceImageBase64" alt="人脸图">
            </div>
            <div class="imgBlock">
                <span>背景图</span>
                <img :src="detail.snapImageBase64" alt="背景图">
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
        </el-dialog>
        <div class="liItem" v-for="(item,index) in data" :key="index">
            <div class="index">{{index+1}}</div>
            <img :src="item.compareImageBase64" alt="">
            <div class="content">{{item.name}}</div>
            <div class="content">{{item.sex}}</div>
            <div class="content">{{item.snapDate}}</div>
            <div @click="showDetail(item)" style="cursor:pointer">详情</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'myList4',
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
        methods: {
            
            showDetail(item){
                this.detail = item
                this.dialogVisible = true
                let obj = JSON.parse(item.faceFeatureJson)
                this.detail.feature = Object.values(obj.faceFeatureJson).join(',')
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
    .imgs{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .imgBlock{
       
        text-align: center;
        img{
             width: 90%;
            display: block;margin: 10px auto;
        }
    }
    .formItem /deep/ label.el-form-item__label{
        color:#fff
    }
</style>