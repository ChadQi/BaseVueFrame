<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                name:'Vue.js'
            }
        }
    }
</script>

<style scoped>
    div{
        font-size: 24px;
        color:#f50;
    }
</style>