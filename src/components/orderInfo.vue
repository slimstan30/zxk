<template>
    <div class="compBox">
        <comp-title text="工单信息"></comp-title>
        <change-btn class="changeBtn" :nameId="nameId" compName='orderInfo'></change-btn>
        <!-- <div class="flexbox">
            <small-pie :id="nameId" :value='46' stat="已处理" type="blue"></small-pie>
            <small-pie :id="nameId+'2'" :value='16' stat="未处理" type="yellow"></small-pie>
        </div> -->
        <my-table :nameId="nameId"></my-table>
    </div>
</template>

<script>
    import compTitle from'./compTitle'
    import changeBtn from'./changeBtn'
    import smallPie from './charts/smallPie'
    import myTable from './otherComp/myTable'
    export default {
        name:'orderInfo',
        components: {
            compTitle,changeBtn,smallPie,myTable
        },
        props: {
            nameId: {
                type: String,
                default:'' 
            },
        },
        methods: {
            
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
        width: 60%;
        justify-content: space-between;
    }
</style>