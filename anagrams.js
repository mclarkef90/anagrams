function funWithAnagrams(text) {
    // Write your code here
    let results= [];
    let word
    let letters
    let nextWord
    let nextLetters
    let prevWord
    let prevLetters

    for (let i=0; i<text.length; i++){
       word= text[i].toString();
       letters= word.split("");
       letters.sort(function(a, b){
            if(a < b) { return -1; }
            if(a > b) { return 1; }
            return 0;
        })
        console.log("letters " + letters)

        for (let j=i+1; j<text.length; j++) {

           if (text[i-1] != undefined){
               prevWord= text[i-1].toString();
               prevLetters= prevWord.split("");
               prevLetters.sort(function(a, b){
               if(a < b) { return -1; }
               if(a > b) { return 1; }
               return 0;
                })
               console.log("prev " + prevLetters)
           }

          nextWord= text[j].toString();
          nextLetters= nextWord.split("");
          nextLetters.sort(function(a, b){
            if(a < b) { return -1; }
            if(a > b) { return 1; }
              return 0;
            })
         console.log("next " + nextLetters)


          if (prevWord != undefined && letters.join() == nextLetters.join() && letters.join()!= prevLetters.join()){
                results.push(word)
            }
        }
    }


   results.sort(function(a, b){
            if(a[0] < b[0]) { return -1; }
            if(a[0] > b[0]) { return 1; }
            return 0;
            })

  console.log(results)
   return results
}

funWithAnagrams([4,
"code",
"aaagmnrs",
"anagrams",
"doce"])
