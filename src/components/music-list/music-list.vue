<!-- 
 * @description: 
 * @fileName: music-list.vue 
 * @author: Wai HoYu 
 * @date: 2019-08-02 04:21:21
 * @后台人员:  
 * @version: V1.0.5 
!-->
       
<!--  -->
<template>
   <div class='music-list'>
       <div class="back" @click="back">
           <div class="icon-back"></div>
       </div>
       <h1 class="title" v-html="title">
       </h1>
       <div class="bg-image" :style="bgStyle" ref="bgImage">
           <div class="filter" ref="filter"></div>
       </div>
       <div class="bg-layer" ref="layer">
       </div>
       <scroll @scroll="scroll" :data="songs" class="list" ref="list" :probeType="probeType" :listen-scroll="listenScroll">
           <div class="song-list-wrapper">
               <song-list :songs= "songs">
               </song-list>
           </div>
       </scroll>
   </div>
</template>

<script  type="text/ecmascript-6">
       //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
       //例如：import 《组件名称》 from '《组件路径》';
        import Scroll from 'base/scroll/scroll'
        import SongList from 'base/song-list/song-list'
        import {prefixStyle} from 'common/js/dom.js'

        const  RESERVED_HEIGHT = 40
        const transform = prefixStyle('transform')
        const backdrop = prefixStyle('backdrop-filter')

       export default {
           data() {
           //这里存放数据
           return { 
                 scrollY: 0   
               };
           },
           props: {
           //这里存放属性
            bgImage: {
                type: String,
                default: ''
            },
            songs: {
                type: Array,
                default: []
            },
            title:{
                type: String,
                default: ''
            }
           },
        //import引入的组件需要注入到对象中才能使用
        components: {
            Scroll,
            SongList
        },
       //监听属性 类似于data概念
       computed: {
            bgStyle() {
                return  `background-image: url(${this.bgImage})`
            }   
        },
       //监控data中的数据变化
       watch: {
           scrollY(newY) {
               console.log(newY)
                let translateY = Math.max(this.minTranslateY, newY)
                let zIndex = 0
                let scale = 1
                let blur = 0
                this.$refs.layer.style[transform] = `translate3d(0, ${translateY}px, 0)`
                // this.$refs.layer.style['webkitTransform'] = `translate3d(0, ${translateY}px, 0)`
                const precent = Math.abs(newY / this.imageHeight)
                if (newY > 0) {
                       scale = 1 + precent   
                       zIndex = 10
                }else {
                    blur = Math.min(20 * precent, 20)       
                }
                this.$refs.filter.style[backdrop] = `blur(${blur}px)`
                // this.$refs.filter.style['webkitBackdrop-filter'] = `blur(${blur}px)`
                if (newY < this.minTranslateY) {
                    zIndex = 10
                    this.$refs.bgImage.style.paddingTop = 0
                    this.$refs.bgImage.style.height = `${RESERVED_HEIGHT}px`
                }
                else {
                    this.$refs.bgImage.style.paddingTop = '70%'
                    this.$refs.bgImage.style.height = 0
                }
                this.$refs.bgImage.style.zIndex = zIndex
                this.$refs.bgImage.style[transform] = `scale(${scale})`
                // this.$refs.bgImage.style['webkitTransform'] = `scale(${scale})`          
           }    
        },
       //方法集合
       methods: {
           scroll(pos) {
               this.scrollY = pos.y
           },
           back() {
               this.$router.back()
           }
       },
       //生命周期 - 创建完成（可以访问当前this实例）
       created() {
            this.probeType = 3
            this.listenScroll = true        
       },
       //生命周期 - 挂载完成（可以访问DOM元素）
       mounted() {
            this.imageHeight = this.$refs.bgImage.clientHeight
            this.minTranslateY = - this.imageHeight + RESERVED_HEIGHT
            this.$refs.list.$el.style.top = `${this.imageHeight}px`     
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
       //@import url(); 引入公共css类
       @import "~common/stylus/variable"
       @import "~common/stylus/mixin"

        .music-list
            position fixed
            z-index 100
            top 0
            left 0
            bottom 0
            right 0
            background $color-background
            .back
                position absolute
                top 0
                left 6px
                z-index 50
                .icon-back
                    display block
                    padding 10px
                    font-size $font-size-large-x
                    color $color-theme
            .title
                position absolute
                top 0
                left 10%
                z-index 40
                width 80%
                no-wrap()
                text-align center
                font-size $font-size-large
                color $color-text
            .bg-image
                position relative
                width 100%
                height 0
                padding-top 70%
                background-size cover
                .play-wrapper
                    position absolute
                    bottom 20px
                    z-index 50
                    width 100%
                    .play
                        box-sizing border-box
                        width 135px
                        padding 7px 0
                        margin 0 auto 
                        text-align center
                        bottom 1px solid $color-theme
                        color $color-theme
                        border-radius 100px
                        font-size 0
                        .icon-play
                            display inline-block
                            vertical-align middle
                            margin-right 6px
                            font-size $font-size-medium-x
                        .text
                            display inline-block
                            vertical-align middle
                            font-size $font-size-small
                .filter
                    position absolute
                    top 0
                    left 0
                    width 100%
                    height 100%
                    background rgba(7, 17, 27, 0.4)
            .bg-layer
                position relative
                height 100%
                background $color-background
            .list
                position fixed
                top 0
                bottom 0
                width 100%
                background $color-background
                .song-list-wrapper
                    padding 20px 30px
                .loading-container
                    position absolute
                    width 100%
                    top 50%
                    tranform translateY(-50%)        
   </style>