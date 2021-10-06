const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    for (let index = 0; index < param.length; index++) {
        for (let j = index+1; j < param.length; j++) {
            if(param[index]===param[j]){
                param.splice(j,1);
            }
            
        }
        
        
    }
    for (let index = 0; index < param.length; index++) {
        console.log(param[index]);
        
    }

  }

removeDuplicates(duplicates);