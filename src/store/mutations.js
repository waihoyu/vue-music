/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-08-01 01:24:49
 *@version: V1.0.5
*/

import * as types from './mutation-types'



const mutations = {
    [types.SET_SINGER](state,singer){
        state.singer = singer
    }
}

export default mutations