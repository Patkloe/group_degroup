// Uncamel
function uncamel(s){
 var ret;
 for(var i = 0; i < s.length; i++){
   let Maj = s[i].toUpperCase();   // UnCamel based of the Upper Case
   //let Mins = s[i].toLowerCase();
    if (s[i] === Maj)
        ret = ret + " " + s[i];
    else
        ret = ret + s[i];
 }
 return ret;  
}
uncamel("PatrickMotsebo");

// Camel , group, grouper
function camel(s){
 var rep;
for (var i = 0; i < s.length; i++){
  if( i === 0)
     rep = rep +s[i].toUpperCase();
  else {
    if(s[i] === " "){
     rep = rep + s[i+1].toUpperCase();
     i++
    }
   else
    rep = rep + s[i];
  }
}
return rep;
}
camel("patrick motsebo");
