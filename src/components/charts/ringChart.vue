<template>
    <div class="container">
        <div class="chart" :id="id"></div>
        <div class="title">
            {{title}}
        </div>
    </div>
</template>

<script>
    import * as echarts from 'echarts';
    export default {
        name:'ringChart',
        props: {
            id: {
                type: String,
                default:'' 
            },
            value: {
                type: Number,
                default:0
            },
            total: {
                type: Number,
                default:0
            },
            title: {
                type: String,
                default:'' 
            },
            type:{
                type: String,
                default:'' 
            },
        },
        data() {
            return {
                mychart:{},
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
                let value = this.value,total = this.total
                let typeColor = [{
                                    offset: 0,
                                    color: '#0f5368' // 0% 处的颜色
                                },
                                {
                                    offset: 0.3,
                                    color: '#1c5c73' // 0% 处的颜色
                                },
                                {
                                    offset: 0.8,
                                    color: '#185a71' // 100% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#18576c' // 100% 处的颜色
                                }
                            ]
                if(this.type!=='blue'){
                    typeColor = [{
                                    offset: 0,
                                    color: '#283038' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#172027' // 100% 处的颜色
                                }
                            ]
                }
                let options = {
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: ['70%', '40%'],
                        silent: true,
                        clockwise: true,
                        startAngle: 90,
                        z: 0,
                        zlevel: 0,
                        label: {
                            normal: {
                                show:true,
                                position: "center",
                                color:'#fff',
                                fontSize:27
                            },
                        },
                        data: [{
                                value: value,
                                name: value,
                                itemStyle: {
                                    color:this.type=='blue'?'#0cf':'#fff'
                                }
                            },
                            {
                                value: total - value,
                                name: "",
                                label: {
                                    normal: {
                                        show: false
                                    }
                                },
                                itemStyle: {
                                    normal: {
                                        opacity:0.8,
                                        color: { // 完成的圆环的颜色
                                            colorStops: typeColor
                                        },
                                    }
                                }
                            }
                        ]
                    },
                   
                ]
                };
                this.mychart.setOption(options)
                window.addEventListener("resize", () => { this.mychart.resize();});
            }
        },
    }
</script>

<style lang="scss" scoped>
    // .container{
    //     display: flex;
    //     align-items: center;
    // }
    .chart{
        width:9vw;
        height:9vw;
    }
    .title{
        color:#0cf;
        font-weight: 400;
        width: 9vw;
        text-align: center;
    }
</style>