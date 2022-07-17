<template>
        <tr>
          <td><input type="checkbox" name=""></td>
          <td>{{name}}</td>
          <td>{{price}}</td>
          <td><button>-</button> {{ num }} <button>+</button></td>
          <td>{{price}}</td>
          <button @click="pun">删除</button>
        </tr>

</template>

<script>
export default {
    name:'ShoPing',
    props:['name','price','num','checked','index'],

    methods: {
        pun(){
            this.$emit('del',this.index)
        }
    },
}


</script>