/**
 * @Description:
 * @author Wai HoYu
 * @date 2019/7/16 01:22
*/

<template>
    <div class="singer">
       <list-view :data="singers"></list-view>
    </div>
</template>

<script>
    import {getSingerList} from 'api/singer'
    import {ERR_OK} from "src/api/config"
    import Singer from 'common/js/singer'
    import ListView from  'base/listview/listview'

    const  HOT_NAME = "热门"
    const  HOT_SINGER_LEN = 10

    export default {
        data() {
            return {
                singers:[]
            }
        },
        created(){
            this._getSingerList()

        },
        methods: {
            _getSingerList(){
                getSingerList().then((res)=>{
                    console.log(this.code)
                   if (res.code === ERR_OK){
                      this.singers = this._normalizeSinger(res.data.list)

                   }
                })
            },
            _normalizeSinger(list){
               let map = {
                    hot:{
                        title: HOT_NAME,
                        items: []
                    }
               }
               list.forEach((item, index)=>{
                  if (index < HOT_SINGER_LEN){
                     map.hot.items.push(new Singer({
                         id: item.Fsinger_mid,
                         name: item.Fsinger_name
                     }))
                  }
                  const key = item.Findex
                  if (!map[key]){
                    map[key] = {
                        title: key,
                        items: []
                    }
                  }
                  map[key].items.push(new Singer({
                      id: item.Fsinger_mid,
                      name: item.Fsinger_name
                  }))
               })
               // console.log(map)
               //有序列表，需要处理map
               let hot = []
               let ret = []
               for (let key in map){
                    let val = map[key]
                    if (val.title.match((/[a-zA-Z]/))){
                        ret.push(val)
                    }
                    else if (val.title === HOT_NAME){
                       hot.push(val)
                    }
               }
               ret.sort((a, b)=>{ return a.title.charCodeAt(0) - b.title.charCodeAt(0)})
               return hot.concat(ret)
            }
        },
        computed: {

        },
        components: {
            ListView
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   .singer
        position fixed
        top: 88px
        bottom: 0
        width: 100%
</style>
