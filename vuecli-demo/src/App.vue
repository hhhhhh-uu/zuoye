<template>
  <div>
    <h2>{{ str }}</h2>
    <button @click="calculate">
      {{ !disp ? "点击显示各字符出现次数" : "点击隐藏各字符出现次数" }}
    </button>
    <h3 v-show="disp">{{ res }}</h3>
  </div>
</template>

<script>
export default {
  naem: "App",
  components: {},
  data() {
    return {
      str: "asdasdasdasdasdasd",
      disp: false,
      res: {},
    };
  },
  methods: {
    calculate() {
      this.res = this.str.split("").reduce((pre,curr) => {
        if (pre[curr]) {
          pre[curr]++;
        } else {
          pre[curr] = 1;
        }
        return pre;
      }, {});
      this.disp = !this.disp;
    },
  },
};
</script>