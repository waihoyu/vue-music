/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-08-01 01:28:20
 *@version: V1.0.5
*/

import * as types from './mutation-types'

export const selectPlay = function ({commit, state}, {list, index}) {
      commit(types.SET_SEQUENCE_LIST, list)
      commit(types.SET_PLAYLIST, list)
      commit(types.SET_CURRENT_INDEX, index)
      commit(types.SET_FULL_SCREEN, true)
      commit(types.SET_PLAYING_STATE, true)  
      console.log('selectPlay')
}