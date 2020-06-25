import "@babel/polyfill";
import Timer from './timer';

window.addEventListener('load', function(){
    let timer1 = new Timer(document.querySelector('.timer1'), 10);
});

import {wordsCount, getWords} from './stringer';

let string = '  Всем  привет! Ура ура! ';

console.log( wordsCount(string) );

for ( let word of getWords(string)) {
    console.log(word);
}