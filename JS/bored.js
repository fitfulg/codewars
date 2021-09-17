
//MEDIA
const media = ([...valores]) => {
  const cantidad = valores.length
  const result = valores.reduce((a, b) => a + b, 0) / cantidad
  return Number(result.toFixed(1))
}
//media([29,31,20,19,26,25,26,30,18,23,26]) //24.8
//media([5,7,4])//5.3

//MEDIANA
const mediana = (longitud) => {
  longitud.sort((a,b) => a-b);
  const half = Math.floor(longitud.length/2);

  return longitud.length % 2
        ? longitud[half]
        : (longitud[half-1] + longitud[half]) / 2.0;
}
//mediana([2, 2, 3, 3, 5, 7, 8, 130])
//mediana([2, 3, 3, 5, 8, 10, 11])
//mediana([3,1,2]) //2
//mediana([1,2,3,4]) //2.5
//mediana([3,4,1,2,5]) //3

//MODA
const moda = (arr) => {
  let narr = arr.filter((el, index) => 
      arr.indexOf(el) !== index)
  return narr
}
//moda([1,2,2,3]) //2
//moda([5,5,5,1,2,4,8,8]) //[ 5, 5, 8 ]

//GASTOS 
const monthLife = (monthIncome, [...monthExpenses]) => {
  const tExpenses = monthExpenses.reduce((a, b) => a + b, 0);
  return monthIncome - tExpenses
}
 // monthLife(2000, [50, 180, 150, 200, 50]) //1370


//PORCENTAJES
const calcPorcentaje = (valor, total) => (valor / total) * 100 
//calcPorcentaje(10, 100) //10 unidades de 100 es = 10%
//calcPorcentaje(300, 1000) //300 unidades de 1000 es = 30%
const cantidadPorcentada = (porcentaje, total) => (porcentaje * total) / 100;
//mejor movel el punto decimal XD
//cantidadPorcentada(1000, 5) //un 5% d 1000 es 50
//cantidadPorcentada(5, 50)//un 50% de 5 es 2.5

//IMPUESTOS:
const añadeOquitaImpuesto = (costeTotal, [...añadeImpuestos], [...quitaImpuestos]) => {
  const aImp = añadeImpuestos.reduce((a, b) => a + b, 0)
  const qImp = quitaImpuestos.reduce((a, b) => a + b, 0)
  const cantidadImpuestoAsumar = cantidadPorcentada(costeTotal, aImp)
  const cantidadImpuestoArestar = cantidadPorcentada(costeTotal, qImp)
    return costeTotal + cantidadImpuestoAsumar - cantidadImpuestoArestar
}
//añadeOquitaImpuesto(100, [21, 5, 2], [0]) //128 €
//añadeOquitaImpuesto(40, [21], [0]) //48.4 €
//añadeOquitaImpuesto(40, [21], [1]) //48 €
//añadeOquitaImpuesto(40, [0], [21]) //31.6 €

