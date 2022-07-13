// Untuk memastikan data Anda tidak berubah, JavaScript menyediakan fungsi
//  Object.freeze untuk mencegah mutasi data.

const arr = [6, 8, 5]
Object.freeze(arr)
function rubah(){
    arr[1] = 3
}
rubah()
console.log(arr)