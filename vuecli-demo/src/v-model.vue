<template>
  <div>
    <!-- v-model:是实现vuejs 变量和表单标签value属性, 双向绑定的指令-->
    <div>
      <span>账号:</span>
      <input type="text" :value="tue" @input="tue1">
    </div>
    <div>
      <span>密码:</span>
      <input type="password" :value="passwords" @input="password1">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tue:"",
      passwords:"",
    }
  },
  methods:{
    tue1(e){
      console.log(e.target.value);
      this.tue = e.target.value;
    },
    password1(e){
      console.log(e.target.value);
      this.passwords = e.target.value;
    }
  }
}
</script>