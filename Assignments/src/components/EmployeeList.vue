<template>
    <h2 class="emplyeeTitle">Employee List</h2>
    <table>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
        <tr v-for="employee in employees" :key="employee.name">
            <td>{{employee.name}}</td>
            <td>{{employee.job}}</td>
        </tr>
    </table>
</template>

<script>
    export default {
        name: 'EmployeeList',
         data() {
    return {
      employees : [
      { name : 'Charlie' ,  job : 'Janitor'},
      { name : 'Mac' ,      job : 'Bouncer'},
      { name : 'Dee',       job : 'Aspiring actress'},
      { name : 'Dennis',    job : 'Bartender'}
    ],
    }
  }
    };
</script>

<style scoped>
    table {
        border-collapse: collapse;
        width: 100%;
        margin-left: 20px;
        margin-right: 20px;
    }

    th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }
    .emplyeeTitle {
        margin-top: 30px;
        text-align: center;
    }
</style>