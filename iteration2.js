const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord (cualquierArray) { 
  let longestWord = cualquierArray[0];
  
  for (let index = 0; index < cualquierArray.length; index++) {
      if (cualquierArray[index].length > longestWord.length) {
          longestWord = cualquierArray[index] 
      }
       
    
      
  }
  
  console.log(longestWord)
}

findLongestWord (avengers)