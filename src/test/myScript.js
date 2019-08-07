// let arr = ["abc", "def"]

// const mutations = {

//     [arr[1]]() {
//     }
// }
// console.log('commit')
const ab = {
    commit: function() {
        console.log('commit 1')
    }
}

const {commit} = ab
commit()