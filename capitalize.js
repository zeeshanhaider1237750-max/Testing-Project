export let capitalize = (string) => {
    if(!string){
        return string; 
    }
    let array = string.split('');
    array[0] = array[0].toUpperCase();
    string = array.join('');
    return string;
}