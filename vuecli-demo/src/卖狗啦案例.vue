<template>
  <div>
    <Dog
      v-for="(item, index) in arr"
      :key="index"
      :imgurl="item.dogImgUrl"
      :dogname="item.dogName"
    >
    </Dog>
  </div>
</template>
<script>
import Dog from "./components/Dog2.vue";
export default {
  data() {
    return {
      arr: [
        {
          dogImgUrl: "https://img0.baidu.com/it/u=3009007948,3480820896&fm=253&fmt=auto&app=138&f=JPEG?w=539&h=500",
          dogName: "博美",
        },
        {
          dogImgUrl: "https://img2.baidu.com/it/u=2274017972,750948377&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=350",
          dogName: "泰迪",
        },
        {
          dogImgUrl:
          "https://img2.baidu.com/it/u=672031269,1338051513&fm=253&fmt=auto&app=138&f=JPEG?w=502&h=500",
          dogName: "金毛",
        },
        {
          dogImgUrl: "https://img1.baidu.com/it/u=457640628,1697426758&fm=253&fmt=auto&app=138&f=JPEG?w=654&h=486",
          dogName: "哈士奇",
        },
        {
          dogImgUrl: "https://img2.baidu.com/it/u=2499576550,828860860&fm=253&fmt=auto&app=138&f=JPEG?w=504&h=500",
          dogName: "阿拉斯加",
        },
        {
          dogImgUrl: "https://img0.baidu.com/it/u=2782778476,3053701281&fm=253&fmt=auto&app=138&f=JPEG?w=501&h=500",
          dogName: "萨摩耶",
        },
      ],
    };
  },
  components: {
    Dog,
  },
};
</script>
