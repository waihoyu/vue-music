/*
 *@description:
 *@author: Wai HoYu
 *@date: 2019-08-01 01:22:48
 *@version: V1.0.5
*/


import {playMode} from 'common/js/config'

const state = {
    singer: {},
    playing: false,
    fullScreen: false,
    playlist: [],
    sequenceList: [],
    mode: playMode.sequence,
    currentIndex: -1 
}
export default  state 