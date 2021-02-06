<template>
    <div class="compBox">
        <comp-title text="物业缴费"></comp-title>
        <change-btn class="changeBtn" :nameId="nameId" compName='propertyPayment'></change-btn>
        <div class="money">
            <div class="item">
                <div class="num">￥512,168.00</div>
                <div>年度收费额</div>
            </div>
            <div class="item">
                <div class="num">￥5168.00</div>
                <div>月度收费额</div>
            </div>
            <div class="item">
                <div class="num">￥5,168.00</div>
                <div>今日收费额</div>
            </div>
        </div>
        <pie-chart :id="nameId"></pie-chart>
    </div>
</template>

<script>
    import compTitle from'./compTitle'
    import changeBtn from'./changeBtn'
    import pieChart from'./charts/pieChart'
    export default {
        name:'propertyPayment',
        components: {
            compTitle,changeBtn,pieChart,
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
    .money{
        display: flex;
        justify-content: space-around;
        margin: 25px 0 10px 0;
    }
    .item{
        text-align: center;
        color:#fff;
        font-weight: 520;
        font-size: 14px;
    }
</style>