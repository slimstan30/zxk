<template>
    <div>
        <!-- <div class="radio">
            <button @click="changeType('month')" :class="['radioBtn', 'left',type=='month'?'checked':'']">月</button>
            <button @click="changeType('year')" :class="['radioBtn', 'right',type=='year'?'checked':'']">年</button>
        </div> -->
        <div class="chart" :id="id"></div>
    </div>
</template>

<script>
    import * as echarts from 'echarts';
    export default {
        name:'pieChart',
        props: {
            id: {
                type: String,
                default:'' 
            },
        },
        data() {
            return {
                showChart:false,
                mychart:{},
                type:'month',
                info:[],
                total:0,
                data:[]
            }
        },
        mounted () {
            
            this.getData()
        },
        destroyed () {
            this.mychart.dispose();
        },
        methods: {
            changeType(type){
                this.type = type

            },
           async getData(){
                const res2 = await this.$http.get('http://192.168.60.233:20004//unAuth/cdcbi/getHouse')
                if(res2.data.status==200){
                    let info = res2.data.data
                    this.data = [
                        {value: info.vacant, name: '空置'},
                        {value: info.lease, name: '出租'},
                        {value: info.self, name: '自住'},
                    ]
                    this.total = info.total
                    this.draw();
                }
            },
            draw() {
                this.mychart = echarts.init(document.getElementById(this.id))
                let that = this
                let options = {
                    title:{
                        show:true,
                        text:this.total,
                        subtext:'房屋总数',
                        top:'40%',
                        left:'35%',
                        padding:0,
                        textAlign:'center',
                        textStyle:{
                            color:'#fff'
                        },
                        subtextStyle:{
                            color:'#fff'
                        },
                    },
                    legend:{
                        data:this.data,
                        orient:'vertical',
                        itemWidth:15,
                        itemHeight:15,
                        textStyle:{
                            color:'#fff',
                            padding:2,
                            lineHeight:15

                        },
                        top:'5%',
                        right:'5%',
                        formatter: function (name) {
                            let item = that.data.filter(item=>item.name==name)[0]
                            return `${(item.value/that.total*100).toFixed(0)+'%'}\n${item.name}`
                        },
                        rich:{
                            a:{
                                padding:[0,0,10,0],
                                color:'#fff'
                            },
                        }
                    },
                    series:[
                        {
                            name: '',
                            type: 'pie',
                            radius: [50, 70],
                            center: ['35%', '50%'],
                            roseType: 'radius',
                            labelLine:{
                                lineStyle:{
                                    color:'#fff',
                                },
                                length:15,//第一段线长
                                length2:60 //第二段线长
                            },
                            label:{
                                color:'auto',
                                align:'center',
                                overflow:'none',
                                padding:[15,-50,20,-50],
                                formatter: function(p) {
                                    const data = p.data
                                    return `{a|${data.name}: ${data.value}}`
                                },
                                rich:{
                                    a:{
                                        padding:[0,0,10,0],
                                        color:'#fff'
                                    },
                                }
                            },
                            data: this.data
                        },
                        {
                            name: '',
                            type: 'pie',
                            radius: [35, 36],
                            center: ['35%', '50%'],
                            hoverAnimation: false,
                            itemStyle: {
                                normal: {
                                    label: {
                                        show: false,
                                        color: 'white',
                                    },
                                }
                            },
                            data: [{
                                value: 50,
                                name: '',
                                itemStyle: {
                                    normal: {
                                        color: ' #fff',
                                        opacity: 0.5
                                    }
                                }
                            }]
                        },
                    ]
                }
                this.mychart.setOption(options)
                window.addEventListener("resize", () => { this.mychart.resize();});
            }
        },
    }
</script>

<style lang="scss" scoped>
    .radioBtn{
        padding: 5px 13px;
        outline: none;
        background: #00081f;
        border: none;
        color:#3e4148;
        cursor: pointer;
        box-sizing: border-box;
    }
    .checked{
        color:#fff;
        padding: 4px 12px;
        border:#1c44a9 1px solid;
        box-shadow: rgb(28, 68, 169) 0px 0px 20px inset;
    }
    .left{
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    .right{
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
    .chart{
        width:21vw;
        height:11vw;
    }
</style>