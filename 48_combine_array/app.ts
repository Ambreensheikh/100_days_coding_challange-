  //combine array
  let laptop1prices = [50000 , 25000 , 12000];
  let laptop2prices = [60000 , 15000 , 45000];
  //use of spread operator to combine in one array and .sort() to ascending order 
  let Bothprices = [...laptop1prices, ...laptop2prices].sort((a,b) => a-b);

  console.log(Bothprices);
       
       