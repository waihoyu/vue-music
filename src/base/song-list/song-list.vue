<!-- 
 * @description: 
 * @fileName: song-list.vue 
 * @author: Wai HoYu 
 * @date: 2019-08-02 23:38:31
 * @后台人员:  
 * @version: V1.0.5 
!-->
               
<!--  -->
<template>
   <div class='song-list'>
       <ul>
           <li @click="selectItem(song, index)" v-for="(song, index) in songs" class="item" :key="index">
               <div class="content">
                    <h2 class="name"> {{song.name}} </h2>
                    <p class="desc">  {{getDesc(song)}} </p> 
               </div>
           </li>
       </ul>
   </div>
</template>

<script  type="text/ecmascript-6">
       //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
       //例如：import 《组件名称》 from '《组件路径》';
                                                       
       export default {
           data() {
           //这里存放数据
           return { 
                    
               };
           },
           props: {
           //这里存放属性
              songs:{
                  type: Array,
                  default: []
              }                          
           },
        //import引入的组件需要注入到对象中才能使用
        components: {
               
        },
       //监听属性 类似于data概念
       computed: {
               
        },
       //监控data中的数据变化
       watch: {
               
        },
       //方法集合
       methods: {
            getDesc(song) {
                return `${song.singer}·${song.album}`
            },
            selectItem(item, index) {
                this.$emit('select', item, index)
            }   
       },
       //生命周期 - 创建完成（可以访问当前this实例）
       created() {
               
       },
       //生命周期 - 挂载完成（可以访问DOM元素）
       mounted() {
               
       },
       //生命周期 - 创建之前
       beforeCreate() { 
                       
       },
       //生命周期 - 挂载之前
       beforeMount() { 
                       
       },
       //生命周期 - 更新之前
       beforeUpdate() { 
                       
       },
       //生命周期 - 更新之后
       updated() { 
                       
       },
       //生命周期 - 销毁之前
       beforeDestroy() { 
                       
       },
       //生命周期 - 销毁完成
       destroyed() { 
                       
       },
       //如果页面有keep-alive缓存功能，这个函数会触发
       activated() { 
                       
       },
   }
   </script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

    .song-list
        .item
            display: flex
            align-items: center
            box-sizing: border-box
            height: 64px
            font-size: $font-size-medium
            .rank
                flex: 0 0 25px
                width: 25px
                margin-right: 30px
                text-align: center
                .icon
                    display: inline-block
                    width: 25px
                    height: 24px
                    background-size: 25px 24px
                    &.icon0
                        bg-image('first')
                    &.icon1
                        bg-image('second')
                    &.icon2
                        bg-image('third')
                .text
                    color: $color-theme
                    font-size: $font-size-large
            .content
                flex: 1
                line-height: 20px
                overflow: hidden
                .name
                    no-wrap()
                    color: $color-text
                .desc
                    no-wrap()
                    margin-top: 4px
                    color: $color-text-d
</style>