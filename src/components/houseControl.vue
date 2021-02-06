<template>
    <div class="compBox">
        <comp-title text="房屋管控"></comp-title>
        <change-btn class="changeBtn" :nameId="nameId" compName='houseControl'></change-btn>
        <pie-chart3 class="chart" :id="nameId"></pie-chart3>
    </div>
</template>

<script>
    import compTitle from'./compTitle'
    import changeBtn from'./changeBtn'
    import pieChart3 from'./charts/pieChart3'
    export default {
        name:'houseControl',
        components: {
            compTitle,changeBtn,pieChart3,
        },
        props: {
            nameId: {
                type: String,
                default:'' 
            },
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
    .chart{
        margin-top: 1.5vw;
    }
</style>