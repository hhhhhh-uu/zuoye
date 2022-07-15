<template>
  <div>
    <h1>使用同一个过滤器处理{{msg}}粉丝数量</h1>
    <h4>国内网站:粉丝数量:{{msg | age}}万</h4>
    <h4>外国网站:粉丝数量:{{msg | age1}}千</h4>
    <h1>使用同一个过滤器处理{{msg2}}时间戳</h1>
    <h4>时间:{{msg2 | formatTime}}</h4>
    <h4>时间:{{msg2 | formatTime1}}</h4>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      msg:18769886,
      msg2:1636450540055
    }
  },
  filters:{
    age:(val) =>{
      return val / 10000
    },
    age1:(val) =>{
      return val / 1000
    },
    formatTime:(val) => {
      return moment(val).format("YYYY-MM-DD")
    },
    formatTime1:(val) => {
      return moment(val).format("YYYY/MM/DD")
    }
  }
}
</script>