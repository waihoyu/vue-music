<!-- 
 * @description: 
 * @fileName: singer-detail.vue 
 * @author: Wai HoYu 
 * @date: 2019-07-31 15:41:37
 * @后台人员:  Wai HoYu
 * @version: V1.0.5 
!-->
                
 <!--  -->
 <template>
    <transition name="slide">
         <div class='singer-detail'></div>
    </transition>
 </template>
 
 <script  type="text/ecmascript-6">
        //这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
        //例如：import 《组件名称》 from '《组件路径》';
        import {mapGetters} from 'vuex'
        import {getSingerDetail} from 'api/singer.js' 
        import {ERR_OK} from 'api/config'
        import {createSong} from 'common/js/song'                                              
        export default {
            data() {
            //这里存放数据
            return { 
                  songs:[]   
                };
            },
            props: {
            //这里存放属性
            },
         //import引入的组件需要注入到对象中才能使用
         components: {
                
         },
        //监听属性 类似于data概念
        computed: {
            ...mapGetters([
                'singer'
            ])  
         },
        //监控data中的数据变化
        watch: {
                
         },
        //方法集合
        methods: {
            _getDetail() {
                if (!this.singer.id) {
                        this.$router.push('/singer')
                        return 
                }
                getSingerDetail(this.singer.id).then((res) => {
                        if (res.code === ERR_OK){                               
                                this.songs = this._normalizeSongs(res.data.list)
                        }
                        console.log(this.songs)
                })
            },
            _normalizeSongs(list) {
                let ret = []
                list.forEach(item => {
                    let {musicData} = item
                    if (musicData.songid && musicData.albummid) {
                        ret.push(createSong(musicData))    
                    }
                });
                return ret
            }          
        },
        //生命周期 - 创建完成（可以访问当前this实例）
        created() {
            console.log(this.singer)
            this._getDetail()    
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
                        
        }
    }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
        //@import url(); 引入公共css类
        @import '~common/stylus/base'
        @import '~common/stylus/variable'

        .singer-detail
            position fixed
            z-index 100
            top 0
            left 0
            right 0
            bottom 0
            background $color-background
        .slider-enter-active, .slider-leave-active
            transition all 0.3s
        .slider-enter, .slider-leave-to
            transform translate3d(100%, 0, 0)
</style>