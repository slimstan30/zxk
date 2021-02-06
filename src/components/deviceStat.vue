<template>
    <div class="compBox">
        <comp-title text="设备状态"></comp-title>
        <change-btn class="changeBtn" :nameId="nameId" compName='deviceStat'></change-btn>
        <div class="flexbox">
            <ring-chart :id="nameId" type="blue" title="在线（个）" :total="total" :value="online"></ring-chart>
            <ring-chart :id="nameId+'1'" type="grey" title="离线（个）" :total="total" :value="offLine"></ring-chart>
        </div>
    </div>
</template>

<script>
    import compTitle from'./compTitle'
    import changeBtn from'./changeBtn'
    import ringChart from './charts/ringChart'
    export default {
        name:'deviceStat',
        components: {
            compTitle,changeBtn,ringChart
        },
        props: {
            nameId: {
                type: String,
                default:'' 
            },
        },
        computed: {
            online() {
                return this.data.filter(item=>{return item.productStatus==0}).length
            },
            offLine() {
                return this.data.filter(item=>{return item.productStatus==1}).length
            },
            total(){
                this.data.length
            }
        },
        methods: {
             async getData() {
                const res = await this.$http.post('/product_product/listProduct',{})
                if(res.data.status==200){
                    this.data = res.data.data
                }
            }
        },
        data() {
            return {
                data:[]
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
    .flexbox{
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 10px 0 0 0;
    }
</style>