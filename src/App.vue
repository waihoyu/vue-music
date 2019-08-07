/**
 * @Description: 音乐播放器
 * @author Wai HoYu
 * @date 2019/7/16 01:21
*/

<template>
    <div id="app">
        <m-header></m-header>
        <tab></tab>
        <keep-alive>
            <router-view>
            </router-view>
        </keep-alive>
        <player >
        </player>
    </div>
</template>

<script type="text/ecmascript-6">
    import MHeader from '../src/components/m-header/m-header'
    import Tab from '../src/components/tab/tab'
    import Player from '../src/components/player/player'
    
    export default {
        components: {
            MHeader,
            Tab,
            Player
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '../src/common/stylus/variable';

    #app {
        color: $color-theme
    }

</style>



