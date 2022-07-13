// Arrow func tidak perlu menamai fungsi-fungsi ini karena kami tidak menggunakannya kembali di tempat lain.
function hitung(a, b){
    if(a < b){
        return a
    }
    else {
        return b
}
}


const hitung2 = (a, b) => a < b ? a : b
console.log(hitung(8,6))
console.log(hitung2(7,5))


