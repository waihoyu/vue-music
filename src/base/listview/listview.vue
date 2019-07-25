/**
 * @Description:
 * @author Wai HoYu
 * @date 2019/7/24 03:27
*/

<template>
  <scroll class="listview" :data="data">
    <ul>
      <li v-for="group in data" class="list-group" v-bind:key="group">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li v-for="item in group.items" class="list-group-item" v-bind:key="item">
            <img v-lazy="item.avatar" alt class="avatar" />
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
  </scroll>
</template>

<script type="text/ecmascript-6">
import Scroll from "base/scroll/scroll";
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {
    Scroll
  },
  destroyed() {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .listview 
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $color-background;
    .list-group 
      padding-bottom: 30px;
</style>
