/**
 * @Description:
 * @author Wai HoYu
 * @date 2019/7/16 01:22
*/

<template>
    <div class="singer">

    </div>
</template>

<script>
    import {getSingerList} from 'api/singer'
    import {ERR_OK} from "src/api/config";

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
                      this.singers = res.data.list
                      console.log(this.singers)
                   }
                })
            }
        },
        computed: {},
        components: {}
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
   .singer
        position fixed
        top: 88px
        bottom: 0
        width: 100%
</style>
