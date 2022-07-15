<template>
  <div>
    <ul>
      <li v-for="item in myArr" :key="item">
        {{item}}
      </li>
    </ul>
    <button @click="but">走一走</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myArr:['帅哥','美女','狗']
    }
  },
  methods: {
    but(){
      this.myArr.push(this.myArr[0])
      this.myArr.shift()
    }
  },
}
</script>