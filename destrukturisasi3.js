// Anda bisa melewati seluruh objek,
// lalu memilih atribut spesifik yang Anda inginkan dengan menggunakan .operator. 
// Tapi ES6 menawarkan opsi yang lebih elegan!
const nilai = {
    max: 90,
    min: 60,
  };
  
 const rataRata = ({max, min}) => (max + min) / 2.0

 console.log(rataRata(nilai))
 