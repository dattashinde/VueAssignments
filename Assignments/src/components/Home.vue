<template>
    <div>
        <h2>You chose Home</h2>
        <EmployeeList />
        <EmployeeAdd />
        <Calculator />
        <DigitalClock />
    </div>
</template>

<script>
    import EmployeeAdd from './EmployeeAdd.vue'
    import Calculator from './Calculator.vue'
    import DigitalClock from './DigitalClock.vue'
    import EmployeeList from './EmployeeList.vue'
    export default {
        name:'Home',
        components :{
            EmployeeAdd,
            Calculator,
            DigitalClock,
            EmployeeList
        }
    }
</script>

<style scoped>
h2 {
    margin-top: 20px;
    font-weight: 700;
}
</style>