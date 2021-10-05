<template>
    <div>
        <h2>You chose Projects</h2>
        <Calculator />
    </div>
</template>

<script>
    import Calculator from './Calculator.vue'
    export default {
        name:'Projects',
        component : {
            Calculator
        }
    }
</script>

<style scoped>
h2 {
    margin-top: 20px;
    font-weight: 700;
}
</style>