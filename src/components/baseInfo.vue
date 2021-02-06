<template>
    <div class="compBox">
        <comp-title text="基础信息"></comp-title>
        <change-btn class="changeBtn" :nameId="nameId" compName='baseInfo'></change-btn>
        <div class="people info">
            <div>实有人口</div>
            <div class="num" v-for="(n,index) in ((people+'').padStart(5,'0'))" :key="'p'+index">{{n}}</div>
            人
        </div>
        <div class="people info">
            <div>实有房屋</div>
            <div class="num" v-for="(n,index) in ((house+'').padStart(5,'0'))" :key="'h'+index">{{n}}</div>
            户
        </div>
        <div class="people info">
            <div>实有车辆</div>
            <div class="num" v-for="(n,index) in ((car+'').padStart(5,'0'))" :key="'c'+index">{{n}}</div>
            辆
        </div>
    </div>
</template>

<script>
    import compTitle from'./compTitle'
    import changeBtn from'./changeBtn'
    export default {
        name:'baseInfo',
        props: {
            nameId: {
                type: String,
                default: ''
            },
        },
        components: {
            compTitle,changeBtn,
        },
        data() {
            return {
                people: 12345,
                house:2340,
                car:233,
            }
        },
        mounted () {
            this.getData();
        },
        methods: {
            async getData(){
                const res1 = await this.$http.get('/unAuth/cdcbi/getPerson')
                // const res1 = await this.$http.get('http://192.168.60.233:20004//unAuth/cdcbi/getPerson')
                if(res1.data.status==200){
                    this.people = res1.data.data
                }
                const res2 = await this.$http.get('/unAuth/cdcbi/getHouse')
                // const res2 = await this.$http.get('http://192.168.60.233:20004//unAuth/cdcbi/getHouse')
                if(res2.data.status==200){
                    this.house = res2.data.data.total
                }
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
    .info{
        display: flex;
        justify-content: center;
        align-items: center;
        color:#fff;
        margin: 20px auto;
    }
    .num{
        font-size: 20px;
        font-weight: bold;
        padding: 4px 5px;
        background:rgba($color: #000000, $alpha: 0.7);
        border:#2a5cdb 2px solid;
        box-shadow: rgb(28, 68, 169) 0px 0px 20px inset;
        border-radius: 5px;
        margin: 0 5px;
    }
</style>