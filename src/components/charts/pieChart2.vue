<template>
    <div class="flexBox">
        <div >
            <div class="chart" :id="id"></div>
            <div class="info" v-for="item in data" :key="item.index">
                <div>{{item.name+'   '+item.value}}</div>
            </div>  
        </div>
        <div style="margin-top:1.5vw">
            <div class="liItem" v-for="(item,index) in list" :key="index">
                <div class="content" v-for="i in Object.values(item)" :key="i.index">{{i}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as echarts from 'echarts';
    export default {
        name:'pieChart2',
        props: {
            id: {
                type: String,
                default:'' 
            },
        },
        data() {
            return {
                mychart:{},
                data:[
                        {name:'常住人口',value:5000},
                        {name:'流动人口',value:1000},
                    ],
                list:[
                    {name:'张三',entery:'A入口',time:'12:00:00 01/01'},
                    {name:'张三',entery:'A入口',time:'12:00:00 01/01'},
                    {name:'张三',entery:'A入口',time:'12:00:00 01/01'},
                    {name:'张三',entery:'A入口',time:'12:00:00 01/01'},
                ]
            }
        },
        computed: {
            total() {
                let sum = 0
                this.data.map(item=>{
                    sum += item.value
                }) 
                return sum
            }
        },
        mounted () {
            this.draw();
        },
        destroyed () {
            this.mychart.dispose();
        },
        methods: {
            
            draw() {
                this.mychart = echarts.init(document.getElementById(this.id))
                let options = {
                    title:{
                        show:true,
                        text:this.total,
                        subtext:'总人数',
                        top:'40%',
                        left:'50%',
                        padding:0,
                        textAlign:'center',
                        textStyle:{
                            color:'#fff'
                        },
                        subtextStyle:{
                            color:'#fff'
                        },
                    },
                    
                    series:[
                        {
                            name: '',
                            type: 'pie',
                            radius: [50, 70],
                            center: ['50%', '50%'],
                            roseType: 'radius',
                            label:{
                                show:false
                            },
                            data: this.data
                        },
                        {
                            name: '',
                            type: 'pie',
                            radius: [35, 36],
                            center: ['50%', '50%'],
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
    .liItem{
        width: 12vw;
        height: 1.63vw;
        background: url(../../assets/img/9.png) no-repeat;
        background-size:100% 100% ;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:0 .53vw;
        color:#fff;
        margin: 0.3vw 0 0 0;
        font-size: 14px;
    }
    .chart{
        width:8vw;
        height:8vw;
        margin-top: 20px;
    }
    .info{
        width: 8vw;
        text-align: center;
        color:#fff;
        margin: 10px 0;
    }
    .flexBox{
        display: flex;
        justify-content: space-between;
    }
</style>