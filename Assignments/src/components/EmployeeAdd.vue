<template>
  <form id="form1">
    <h2 class="employeeTable">Employee Table</h2>
    <div id="App">
        <table class="table table-bordered">
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Remove</th>
            </tr>
            <tr v-for="item in fullData" :Key="item.id">
                <td>{{item.name}}</td>
                <td>{{item.job}}</td>
                <td><button class="btn btn-primary" v-on:click.prevent="OnDelete(item.Id)" >Delete</button></td>
            </tr>
        </table>
        <h2 class="titile">Add New Employee</h2>
        <div class="div_Master">
            <div class="lable">Name</div>
            <input class="form-control" type="text" placeholder="Enter your name" v-model="name">
            <br>
            <div class="lable">Job</div>
            <input class="form-control" type="text" placeholder="Enter your job" v-model="job">
        </div>
        <div class="submitBtn">
          <button type="button" class="btn btn-primary" v-on:click="btnSubmit()">{{btnMode}} </button>
        </div>
        
    </div>
  </form>
</template>

<script>
export default {
    name: 'EmployeeAdd',
    data() {
      return {
        name: '',
        job: '',
        fullData: [
          {
              Id: 0,
              name: 'Datta', 
              job: "Developer"
          },
           {
              Id: 1,
              name: 'John', 
              job: "Software Developer"
          },
        ],
        btnMode: "Submit",
        Id: 1
      }
    },
    methods: {
      btnSubmit() {
          this.fullData.push({
              Id: this.Id++,
              name: this.name, 
              job: this.job
          })
          this.name = '';
          this.job = '';
      },
      OnDelete(d) {
        this.fullData = (this.fullData).filter(function (val) {
        return val.Id != d
        });
      }
    }
}
</script>

<style>
  form {
    margin-left: 20%;
    margin-right: 20%;
  }
  table {
    margin-top: 30px;
  }
  .lable {
    text-align: left;
    padding-bottom: 10px;
  }
  .div_Master {
    margin-top: 20px;
  }
  .submitBtn {
    margin-top: 30px;
    float: left;
  }
  .titile {
    text-align: left;
    margin-top: 50px;
  }
  .employeeTable {
    margin-top: 50px;
  }
</style>