/**
 * @Description:
 * @author Wai HoYu
 * @date 2019/7/24 12:53
*/

 export default class singer {
   constructor({id, name}){
      this.id = id
      this.name = name
      this.avatar =  `https://y.gting.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
   }
}
