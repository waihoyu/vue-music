/**
 * @Description:
 * @author Wai HoYu
 * @date 2019/7/16 09:22
*/

export  function addClass(el, className) {

     if (hasClass(el, className)){
        return
     }
     let newClass = el.className.split(' ')
     newClass.push(className)
     el.className = newClass.join('')
}


export  function hasClass(el, className) {
   let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}



