function findLongestWord(string = "") {
    let words = string.split(' ');
    let smallWold = words[0];

    for (const word of words) {

        if (word.length > smallWold.length) {
            smallWold = word;            
        }        
    }
    return smallWold;
  // Write code under this line
  
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'

/*
Задача 2-3
Поиск самого длинного слово в строке с пробелами

Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку (в строке будут только слова и пробелы)
 и возвращает самое длинное слово в этой строке.
*/
