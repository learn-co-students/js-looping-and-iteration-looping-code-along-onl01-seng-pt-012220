// Code your solutions in this file
const names= [ 'Lisa', 'Kaitlin', 'Jan' ];
const cards= "surprise";
let a = []
function writeCards(names, cards) {
    for (let i = 0; i < names.length; i++) {
      
      console.log(a.push(`Thank you, ${names[i]}, for the wonderful ${cards} gift!`));
    }
   return a;
    
  }

  function countDown(x){
    let c =10
    while (c > -1){
        console.log(c--)
    }
    }