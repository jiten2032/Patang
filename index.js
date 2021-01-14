class Response{
async ResponseURL(url){
   let ResponseData = await fetch(url);
   let Data = await ResponseData.json();
   return Data ; 
    
}
}

