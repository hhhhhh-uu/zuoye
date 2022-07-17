<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name"/>
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="flag ? add() : but()">添加/修改</button>
    </div>
    <div>
      <table
        border="1"
        cellpadding="10"
        cellspacing="0"
      >
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in list" :key="index">
          <td>{{index+1}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{item.sex}}</td>
          <td>
            <button @click="btn(index)">删除</button>
            <button @click="pun(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            name:'',
            age:"0",
            sex:[],
            flag:false,
            list:[{
                name:'Tom',
                age:20,
                sex:'男',
            },
               {
                name:'Jone',
                age:18,
                sex:'女'
               } 
            ]
        }
    },
    methods: {
        but(){
        if (this.name.trim().length == 0 || this.age == 0) {
        this.name = ''
        this.age = 0
        return alert("请输入完整的信息");
        }
        this.list.push({
        id: this.list[this.list.length - 1].id+1,
        name: this.name,
        age: this.age,
        sex: this.sex,
      })
      this.name = ''
      this.age = 0
      this.sexq=[]
    },
    pun(index){
      this.name = this.list[index].name
      this.age = this.list[index].age
      this.sex = this.list[index].sex
      this.arr[index].val = index
    },
    btn(index){
      this.list.splice(index, 1);
    },
    add(){
       this.sexq[this.val].name = this.name;
      this.sexq[this.val].age = this.age;
      this.sexq[this.val].sex = this.sex;
    }
}
}
</script>
