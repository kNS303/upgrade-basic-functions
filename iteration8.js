const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
      
      let arreglo=[];
      for (let i = 0; i < param.length; i++) {
        let cont=1;
          for (let j = i+1; j < param.length; j++) {
              if (param[i]===param[j]) {
                  cont++;
              }
             
          }
          arreglo.push(cont);   
      }
      return arreglo;
  }

  console.log(repeatCounter(counterWords));