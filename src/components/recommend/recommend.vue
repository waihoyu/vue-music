/**
* @Description:  推荐模块抽象
* @author Wai HoYu
* @date 2019/7/16 01:21
*/

<template>
    <div>
        <div class="recommend" ref="recommend">
            <scroll ref="scroll" class="recommend-content" :data="discList">
                <div>
                    <div  v-if="recommends.length" class="slider-wrapper">
                        <slider>
                            <div v-for="item in recommends"  >
                                <a :href="item.linkUrl">
                                    <img  class="needsclick" @load="loadImage"  :src="item.picUrl" alt="">
                                </a>
                            </div>
                        </slider>
                    </div>
                    <div class="recommend-list">
                        <h1 class="list-title">热门歌单推荐</h1>
                        <ul>
                            <li v-for="item in discList" class="item">
                                <div class="icon">
                                    <img width="60" height="60" v-lazy="item.imgurl">
                                </div>
                                <div class="text">
                                    <h2 class="name" v-html="item.creator.name"></h2>
                                    <p class="desc" v-html="item.dissname"></p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="loading-container" v-show="!discList.length">
                  <loading></loading>
                </div>
            </scroll>
        </div>
    </div>
</template>


<script type="text/ecmascript-6">
    /**
     * @param {{slider1:string}} data
     *
     */
    import Loading  from 'base/loading/loading'
    import Slider   from  'base/slider/slider'
    import Scroll   from  'base/scroll/scroll'
    import {getRecommend,getDiscList} from '@/api/recommend'
    import {ERR_OK} from 'api/config'

    export default {
        data() {
            return {
                recommends: [],
                discList: []
            }
        },
        created(){
            setTimeout(() => {
                this._getRecommend()
                this._getDiscList()
            }, 2000)
        },
        methods: {
            _getRecommend() {
                getRecommend().then((res) => {
                    if (res.code === ERR_OK){
                        /**
                        * @namespace  data.slider
                        ***/
                        this.recommends = res.data.slider
                    }
                }).then((err)=>{
                   console.log(err)
                })
            },
            _getDiscList(){
                getDiscList().then((res) => {
                    if (res.code === ERR_OK) {
                        this.discList = res.data.list
                    }
                })
            },
            loadImage(){
                //验证一次就行，多次会浪费
                if (!this.checkLoaded) {
                   this.$refs.scroll.refresh()
                    this.checkLoaded = true
                }
            }
        },
        computed: {
        },
        components: {
            Slider,
            Scroll,
            Loading
        }
    }
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"
    .recommend
        left: 0
        position: fixed
        width: 100%
        top 88px
        bottom: 0
        .recommend-content
            height 100%
            overflow hidden
            .slider-wrapper
                position: relative
                width: 100%
                overflow: hidden
            .recommend-list
                .list-title
                    height 65px
                    line-height: 65px
                    text-align: center
                    font-size $font-size-medium
                    color $color-theme
                .item
                    display: flex
                    box-sizing: border-box
                    align-items: center
                    padding: 0 20px 20px 20px
                    .icon
                        flex: 0 0 60px
                        width: 60px
                        padding-right: 20px
                    .text
                        display: flex
                        flex-direction: column
                        justify-content: center
                        flex: 1
                        line-height: 20px
                        overflow: hidden
                        font-size: $font-size-medium
                        .name
                            margin-bottom: 10px
                            color: $color-text
                        .desc
                            color: $color-text-d
            .loading-container
                position: absolute
                width: 100%
                top: 50%
                transform: translateY(-50%)
</style>

