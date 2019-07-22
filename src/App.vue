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
    </div>
</template>

<script type="text/ecmascript-6">
    import MHeader from '../src/components/m-header/m-header'
    import Tab from '../src/components/tab/tab'

    export default {
        components: {
            MHeader,
            Tab
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import '../src/common/stylus/variable';

    #app {
        color: $color-theme
    }

</style>

