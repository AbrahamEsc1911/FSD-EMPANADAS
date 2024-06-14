export const fn = (a, b, c) => {

   let valorA = a;
   let valorB = b;
   let valorC = c;

   let promoPay = [];
   let valorTotal = 0;

   let totalCombi = [];

   if (a < 0 || b < 0 || c < 0) {
      throw new Error('Parameter is not a number!')
   }
   if ((a + b + c) > 40) {
      throw new Error('please, add a number less than 40')
   }
   if ((a + b + c) % 3 != 0) {
      throw new Error('Parameter is not a number!')
   }
   if (isNaN(a) || isNaN(b) || isNaN(c)) {
      throw new Error('Parameter is not a number!')
   }
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
      totalCombi.push(13, 13)
      valorB--
      valorC--
   }
   while(valorA > 0){
      totalCombi.push(12)
      valorA--
   }
   while(valorB > 0){
      totalCombi.push(14)
      valorB--
   }
   while(valorC > 0){
      totalCombi.push(16)
      valorC--
   }
   totalCombi.sort((a, b) => b - a);

   for(let i = 0; i < totalCombi.length; i += 3){
      promoPay.push(totalCombi[i])
   } 
   for(let x = 0; x < promoPay.length; x++){
      valorTotal += promoPay[x]
   }
return valorTotal;

};
