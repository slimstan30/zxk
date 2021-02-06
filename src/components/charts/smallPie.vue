<template>
    <div class="container">
        <div class="chart" :id="id"></div>
        <div class="info">
            <div>{{value}}</div>
            <div>{{stat}}</div>
        </div>
    </div>
</template>

<script>
    import * as echarts from 'echarts';
    export default {
        name:'smallPie',
        props: {
            id: {
                type: String,
                default:'' 
            },
            value: {
                type: Number,
                default:'' 
            },
            total: {
                type: Number,
                default:'' 
            },
            stat: {
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
                let options = {
                angleAxis: {
                    max: this.total,
                    clockwise: true, // 逆时针
                    // 隐藏刻度线
                    show: false
                },
                grid:{
                    top:'0px',
                    left:'0px',
                    right:'0px',
                    bottom:'0px'
                },
                radiusAxis: {
                        type: 'category',
                        show: true,
                        axisLabel: {
                            show: false,
                        },
                        axisLine: {
                            show: false,

                        },
                        axisTick: {
                            show: false
                        },
                },
                polar: {
                    center: ['50%', '50%'],
                    radius: '100%' //图形大小
                },
                series: [{
                    type: 'bar',
                    data: [this.value||0],
                    showBackground: true,
                    backgroundStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: this.type=='blue'?'#0d3c53':'#5b421a'
                        }, {
                            offset: 1,
                            color: this.type=='blue'?'#5284DE':'#5b401a'
                        }]),
                    },
                    coordinateSystem: 'polar',
                    roundCap: true,
                    barWidth: 5,
                    itemStyle: {
                        normal: {
                        opacity: 1,
                        color:  this.type=='blue'?'#02eeff':'#f90',
                    }
                    },
                }]
                };
                this.mychart.setOption(options)
                window.addEventListener("resize", () => { this.mychart.resize();});
            }
        },
    }
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        align-items: center;
    }
    .chart{
        width:3vw;
        height:3vw;
    }
    .info{
        color:#fff;
        font-weight: 400;
    }
</style>