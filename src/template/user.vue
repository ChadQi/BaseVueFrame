<template>
    <div>
        <div>
            用户{{$route.params.id}}
            <router-link to="/index">回index</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "user",
        mounted(){
            // console.log(this.$route.params.id)
        }
    }
</script>

<style scoped>

</style>