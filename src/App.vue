<template>
    <div id="app">
        <MHeard></MHeard>
        <Tab></Tab>
        <router-view>
        </router-view>
    </div>
</template>

<script type="text/ecmascript-6">
    import MHeard from '../src/components/m-header/m-header'
    import Tab from '../src/components/tab/tab'

    export default {
        components: {
            MHeard,
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

