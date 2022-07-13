const cuaca = {
    kemarin: {low: 45, high: 57},
    sekarang: {low: 60, high: 75},
    besok: {low: 43, high: 56}
  };
  const {kemarin: {low: lowKemarin, high: highKemarin}} = cuaca;
  const {sekarang: {low: lowSekarang, high: highSekarang}} = cuaca;

  console.log(lowSekarang)