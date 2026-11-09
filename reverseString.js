export let reverse = (string) =>{
   if(!string){
    return string;
   }
   let array = string.split('');
   let list = "";
   for(let i=array.length-1; i >= 0; i--){
    list = list + array[i];
   }
   string = list;
   return string;
}