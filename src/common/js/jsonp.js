/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-09-16 14:38:11
 *@version: V1.0.5
*/

import originJSONP from 'jsonp'

export  default  function jsonp(url, data, option) {
    url +=  (url.indexOf('?') < 0 ? '?' : '&') + param(data)
    // console.log(url)
    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, data) => {
            if (!err){
                resolve(data)
            } else
            {
                reject(err)
            }
        })
    })
}

function param(data) {
    let url = ''
    for (var k in data) {
        let value = data[k] !== undefined ? data[k] : ''
        url += `&${k}=${encodeURIComponent(value)}`
        // url += '&' + k + '=' + encodeURIComponent(value)
    }
    //这个地方会去掉一个&
    console.log(url)
    return url ? url.substr(1) : ''
}
