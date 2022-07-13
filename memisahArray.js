const angka = [1,2,3,4,5,6,7,8,9,10];
function hapusSatuDua(list) {

  const [a, b, ...arr] = list;
  console.log(a, b);
  return arr;
}
const arr = hapusSatuDua(angka);

console.log(arr);
