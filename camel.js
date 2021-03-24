function camel(s){
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
camel("PatrickMotsebo");
