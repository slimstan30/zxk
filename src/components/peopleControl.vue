<template>
    <div class="compBox">
        <comp-title text="人口管控"></comp-title>
        <change-btn class="changeBtn" :nameId="nameId" compName='peopleControl'></change-btn>
        <div class="flexBox">
            <pie-chart2 :id="nameId"></pie-chart2>
        </div>
    </div>
</template>

<script>
    import compTitle from'./compTitle'
    import changeBtn from'./changeBtn'
    import pieChart2 from './charts/pieChart2'
    export default {
        name:'peopleControl',
        components: {
            compTitle,changeBtn,pieChart2,
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
    .flexbox{
        display: flex;
        justify-content: space-between;
    }
</style>