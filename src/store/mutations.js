/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-08-01 01:24:49
 *@version: V1.0.5
*/

import * as types from './mutation-types'

const mutations = {
    [types.SET_SINGER](state,singer) {
        state.singer = singer
    },
    [types.SET_PLAYING_STATE](state, flag) {
        state.playing = flag
    },
    [types.SET_FULL_SCREEN](state, flag) {
        state.fullScreen = flag
        
    },
    [types.SET_PLAYLIST](state, list) {
        state.playlist = list
    },
    [types.SET_SEQUENCE_LIST](state, list) {
        state.sequenceList = list
    },
    [types.SET_PLAY_MODE](state, mode) {
        state.mode = mode
    },
    [types.SET_CURRENT_INDEX](state, index) {
        state.currentIndex = index
    }
}

export default mutations

