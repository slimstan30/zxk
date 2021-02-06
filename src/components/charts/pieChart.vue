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
                mychart:{},
                type:'month',
            }
        },
        mounted () {
            this.draw();
        },
        destroyed () {
            this.mychart.dispose();
        },
        methods: {
            changeType(type){
                this.type = type

            },
            draw() {
                this.mychart = echarts.init(document.getElementById(this.id))
                let options = {
                    series:[
                        {
                            name: '',
                            type: 'pie',
                            radius: [50, 70],
                            center: ['65%', '50%'],
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
                                    // return [`{a|${data.name}}`, `{b|￥${data.value}}`,data.up?`{c|${data.up}}`:`{d|${data.down}}`].join('\n')
                                    return [`{a|${data.name}}`, `{b|￥${data.value}}`,''].join('\n')
                                },
                                rich:{
                                    a:{
                                        padding:[0,0,0,0],
                                        color:'#fff'
                                    },
                                    b:{
                                        padding:[0,0,5,0],
                                        color:'#fff'
                                    },
                                    c:{
                                        padding:[0,0,0,0],
                                        color:'#f90'
                                    },
                                    d:{
                                        padding:[0,0,0,0],
                                        color:'#5082e8'
                                    }
                                }
                            },
                            data: [
                                {value: 3000, name: '本月',up:'↑1%'},
                                {value: 6800, name: '1月',up:'↑1%'},
                                {value: 4600, name: '12月',down:'↓1%'},
                            ]
                        },
                        {
                            name: '',
                            type: 'pie',
                            radius: [35, 36],
                            center: ['65%', '50%'],
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
        width:16.2vw;
        height:9.22vw;
    }
</style>