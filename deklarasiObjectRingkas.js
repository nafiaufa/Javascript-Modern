// ES6 menambahkan beberapa dukungan yang bagus untuk mendefinisikan literal objek dengan mudah
const createPerson = (name, age, gender) => ({
    name, age, gender
  })
    // Only change code below this line
    
  const isi = createPerson("Zodiac Hasbro", 56, "male")
  console.log(isi)