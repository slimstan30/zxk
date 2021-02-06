<template>
    <div class="compBox">
        <comp-title text="车辆管控"></comp-title>
        <change-btn class="changeBtn" :nameId="nameId" compName='carControl'></change-btn>
        <my-list2 class="list" :data="listData"></my-list2>
    </div>
</template>

<script>
    import compTitle from'./compTitle'
    import changeBtn from'./changeBtn'
    import myList2 from'./otherComp/myList2'
    export default {
        name:'carControl',
        components: {
            compTitle,changeBtn,myList2
        },
        props: {
            nameId: {
                type: String,
                default:'' 
            },
        },
        data() {
            return {
                listData: [
                ]
            }
        },
        mounted () {
            this.getData();
        },
        methods: {
            async getData() {
                const res = await this.$http.post('http://192.168.60.249:9877/unAuth/datasearch/car/statistics',{
                    pageNum:1,pageSize:3
                })
                if(res.data.status==200){
                    this.listData = res.data.data.pageInfo.list
                }
            }
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
    .list{
        margin: 1.5vw 0 0 0.7vw;
    }
</style>