export let chipper = (string) => {
   if(!string){
    return string;
   }
   let array = string.split('');
   for(let i = 0; i <= array.length - 1; i++){
     let code = array[i].charCodeAt();
     if(code === 122){
        array[i] = String.fromCharCode(97);
     }
     else if(code >= 97 && code <= 121){
        array[i] = String.fromCharCode(code + 1);
     }
     else if(code === 90){
        array[i] = String.fromCharCode(65);
     }
     else if(code >= 65 && code <= 89){
        array[i] = String.fromCharCode(code + 1);
     }
   }
   string = array.join('');
   return string;
}