<template>
    <div>
        <div v-for="(item, index) in arr"
        style="display: inline-block"
        :key="index">
        <input type="checkbox" v-model="checkNumArr" :value="item">
        <span>{{item}}</span>
        </div>
        <p>你选中的元素, 累加的值和为: {{ theSum }}</p>
    </div>
</template>

<script>
export default {
    data () {
        return {
            arr:[9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
            checkNumArr: [],
        }
    },
    computed:{
        theSum(){
            return this.checkNumArr.reduce((sum,add) => {
                return (sum+=add)
            },0)
        }
    }
}
</script>