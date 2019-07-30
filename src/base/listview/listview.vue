/**
 * @Description:
 * @author Wai HoYu
 * @date 2019/7/24 03:27
*/

<template>
    <scroll class="listview" 
            :data="data" 
            ref="listview" 
            :listenScroll="listenScroll"
            :probeType = "probeType"
    >
        <ul>
            <li v-for="(group, index) in data" class="list-group" v-bind:key="index" ref="listGroup">
                <h2 class="list-group-title">{{group.title}}</h2>
                <ul>
                <li v-for="(item, index) in group.items" class="list-group-item" v-bind:key="index">
                    <img v-lazy="item.avatar" alt class="avatar"/>
                    <span class="name">{{item.name}}</span>
                </li>
                </ul>
            </li>
        </ul>
        <div class="list-shortcut" @touchstart="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove">
            <ul>
                <li class="item" 
                    v-for="(item, index) in shortcutList" 
                    v-bind:key="index"  
                    :data-index="index"
                    :class="{'current' : currentIndex == index}"
                >{{item}}</li>
            </ul>
        </div>
    </scroll>
</template>

<script type="text/ecmascript-6">
    import Scroll from "base/scroll/scroll";
    import {getData} from 'common/js/dom'
    const ANCHOR_HEIGHT = 18
    export default {
        created(){
            this.touch = {}
            this.listenScroll = true
            this.probeType = 3
        },
        props: {
            data: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
                scrollY: -1,
                currentIndex: 0
            };
        },
        methods: {
             onShortcutTouchStart(e,fasle){
                let anchorIndex = getData(e.target, 'index')
                let firstTouch = e.touches[0]
                this.touch.y1 = firstTouch.pageY
                this.touch.anchorIndex = anchorIndex
                this.$refs.listview.scrollToElement(this.$refs.listGroup[anchorIndex],0)
                this._scrollTo(anchorIndex)
             },
             onShortcutTouchMove(e){
                let firstTouch = e.touches[0]
                this.touch.y2 = firstTouch.pageY
                let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
                let anchorIndex = parseInt(this.touch.anchorIndex) + delta
                this._scrollTo(anchorIndex)               
             },
             scroll(pos){
                    this.scrollY = pos.y

             },
             _scrollTo(index){
                this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
             },
             _calculateHeight(){
                 this.listHeight = []
                 const list = this.$refs.listGroup
                 let height = 0
                 this.listHeight.push(height)
                 for (let i = 0;i < list.length; i++) {
                         let item = list[i]
                         height+=item.clientHeight
                         this.listHeight.push(height)
                 }
             }                 
        },
        computed: {
            shortcutList() {
                return this.data.map((group) => {
                       return group.title.substr(0,1)
               }) 
            }
        },
        watch:{
            data(){
                setTimeout(() => {
                    this._calculateHeight()    
                }, 20)
            },
            scrollY(newY){
                const listHeight = this.listHeight
                for (let i = 0; i <= listHeight.length; i++) {
                        let height1 = listHeight[i]
                        let height2 = listHeight[i + 1]
                        if (!height2 || (-newY > height1 && -newY < height2)){
                                this.currentIndex = i
                                return
                        }
                this.currentIndex = 0
                }
            }
        },
        components: {
            Scroll
        },
        destroyed() {

        }
    };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
     @import "~common/stylus/variable"

    .listview 
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: $color-background;
        .list-group 
            padding-bottom: 30px;
            .list-group-title
                height 30px
                line-height 30px
                padding-left 20px
                font-size $font-size-small
                color $color-text-l
                background $color-hightlight-background
            .list-group-item
                display flex
                align-items center
                padding 20px 0px 0px 30px
                .avatar
                    width 50px
                    height 50px
                    border-radius 50%
                .name 
                    margin-left 20px
                    color $color-text-l
                    font-size $font-size-medium
        .list-shortcut
            position absolute
            z-index 30
            right 0
            top 50%
            transform  translateY(-50%)
            width 20px
            padding 30px 0
            border-radius 10px
            text-align center
            background $color-background-d
            font-family Helvetica, Arial, sans-serif
            .item
                padding 3px
                line-height 1
                color $color-text-1
                font-size $font-size-small
                &.current
                    color:$color-theme
            .list-fixed
                position absolute
                top 0
                left 0
                width 100%
                .fixed-title
                    height 30px
                    line-height 30
                    padding-left 20px
                    font-size $font-size-small
                    color $color-text-l
                    background $color-hightlight-background
                .loading-container
                    position absolute
                    width 100%
                    top 50%
                    transform translateY(-50%)                 
</style>