const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(array, x) {
    for (let index = 0; index < array.length; index++) {
        if(array[index]===x){
            return index;
        }
        
    }
    return false;
  }

console.log(finderName(nameFinder,'Tony'));