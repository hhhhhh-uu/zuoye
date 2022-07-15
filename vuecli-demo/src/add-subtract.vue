<template>
  <div>
    <ul>
      <li v-for="(item,index) in sum" :key="index">
        <span>{{item}}</span>
        <button @click="del(index)">删除</button>
      </li>
    </ul>
    <button @click="tue">生成</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sum:[1,4,7]
    }
  },
  methods: {
    del(index){
      this.sum.splice(index,1)
    },
    tue(){
      this.sum.push(Math.floor(Math.random()*20))
    }
  },
}
</script>