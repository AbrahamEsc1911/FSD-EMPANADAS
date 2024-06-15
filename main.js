export const fn = (a, b, c) => {

   //Inicializacion de las variables requeridas

   let valorA = a;
   let valorB = b;
   let valorC = c;

   let promoPay = [];
   let valorTotal = 0;

   let totalCombi = [];

   //Validaciones iniciales para evitar un input que no esté en los parametros.

   if (a < 0 || b < 0 || c < 0) {
      throw new Error('The parameter cannot be negative!')
   }
   if ((a + b + c) > 40) {
      throw new Error('input a number that is less than 40')
   }
   if ((a + b + c) % 3 != 0) {
      throw new Error('The values you have entered are not a multiple of 3!')
   }
   if (isNaN(a) || isNaN(b) || isNaN(c)) {
      throw new Error('Enter a numerical value!')
   }

   //comparaciones para determinar que mezclas se pueden hacer por grupo de empanada y adicion a un array común.

   while (valorA > 0 && valorC > 0) {
      totalCombi.push(14, 14)
      valorA--
      valorC--
   }

   while (valorA > 0 && valorB > 0) {
      totalCombi.push(13, 13)
      valorB--
      valorA--
   }
   while (valorB > 0 && valorC > 0) {
      totalCombi.push(15, 15)
      valorB--
      valorC--
   }
   while (valorA > 0) {
      totalCombi.push(12)
      valorA--
   }
   while (valorB > 0) {
      totalCombi.push(14)
      valorB--
   }
   while (valorC > 0) {
      totalCombi.push(16)
      valorC--
   }

   //Se ordena el array con todos los valores introducidos de manera descendente, estos son los valores resultantes de las posibles combinaciones.

   totalCombi.sort((a, b) => b - a);

   //se recorre el array con todos los valores, y se toma el valor cada 3er posicion y se guardan en un arreglo nuevo.

   for (let i = 0; i < totalCombi.length; i += 3) {
      promoPay.push(totalCombi[i])
   }

   //Se suman todos los elementos obtenidos del Arrglo global de valores, y se suman para tener el resultado a pagar.

   for (let x = 0; x < promoPay.length; x++) {
      valorTotal += promoPay[x]
   }
   return valorTotal;

};
