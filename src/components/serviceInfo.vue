<template>
    <div class="compBox">
        <comp-title text="服务信息"></comp-title>
        <change-btn class="changeBtn" :nameId="nameId" compName='serviceInfo'></change-btn>
        <my-list class="list" :data="listData"></my-list>
    </div>
</template>

<script>
    import compTitle from'./compTitle'
    import changeBtn from'./changeBtn'
    import myList from'./otherComp/myList'
    export default {
        name:'serviceInfo',
        components: {
            compTitle,changeBtn,myList
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
                const res = await this.$http.get('/unAuth/notifyRecord/getNotify')
                // const res = await this.$http.get('http://192.168.60.233:8086//unAuth/notifyRecord/getNotify')
                if(res.data.status==200){
                    this.listData = res.data.data
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