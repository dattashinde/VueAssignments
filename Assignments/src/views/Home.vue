<template>
  <div class="home">
   <h2>Home Page</h2>
    <EmployeeList />
    <EmployeeAdd />
    <Calculator />
    <DigitalClock />
  </div>
</template>

<script>
    import EmployeeAdd from '../components/EmployeeAdd.vue'
    import Calculator from '../components/Calculator.vue'
    import DigitalClock from '../components/DigitalClock.vue'
    import EmployeeList from '../components/EmployeeList.vue'
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
   margin-top: 50px;
    font-weight: 700;
    text-align: center;
}
</style>