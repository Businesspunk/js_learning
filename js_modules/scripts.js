import "@babel/polyfill";
import EmailParser from "./emailParser";
import watchObj from "./watchObj";

let parser = new EmailParser('info@eztec.ru');
console.log(parser.name);

let div = document.createElement('div');
document.body.appendChild(div);

let cleverDiv = watchObj(div, function(prop, val){
    console.log(prop, val);
});


cleverDiv.innerHTML = '<strong>HTML</strong><em>Changed</em>';
cleverDiv.style.color = "red";
cleverDiv.style.fontSize = "25px";
cleverDiv.querySelector('em').style.color = 'green';