<template>
    <div>
        <div class="title">
            <div class="text">{{text}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'compTitle',
        props: {
            text: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
            }
        },
    }
</script>

<style lang="scss" scoped>
    .title{
        width: 11vw;
        height: 1.5vw;
        background: url(../assets/img/8.png) no-repeat;
        background-size:100% 100% ;
        padding: 3px 0 0 10px;
        box-sizing: border-box;
    }
    .text{
        color:#fff;
        font-size: 14px;
    }
</style>