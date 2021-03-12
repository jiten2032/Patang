class Response {
   async GETURL(url) {
      let ResponseData = await fetch(url, {
         method: 'GET',
      })
      let Data = await ResponseData.json();
      return Data;
   }
   async POSTURL(url, resdata) {
      let ResponsepostData = await fetch(url, {
         method: 'POST',
         body:resdata,
         headers: {
            'Content-type': 'application/json; charset=UTF-8'
         }
      });
      let Datapost = await ResponsepostData.text();
      return Datapost;
   }
   async PUTURL(url, resdata) {
      let ResponseputData = await fetch(url, {
         method: 'PUT',
         body:resdata,
         headers: {
            'Content-type': 'application/json; charset=UTF-8'
         }
      });
      let Dataput = await ResponseputData.text();
      return Dataput;
   }
   async PATCHURL(url, resdata) {
      let ResponseputData = await fetch(url, {
         method: 'PATCH',
         body:resdata,
         headers: {
            'Content-type': 'application/json; charset=UTF-8'
         }
      });
      let Dataput = await ResponseputData.text();
      return Dataput;
   }
   async DELETURL(url) {
      const ResponseData = await fetch(url, {
         method: 'DELETE',
         headers: {
            'Content-type': 'application/json; charset=UTF-8'
         }
      })
      const Data = await "The Data Sucessfully deleted" 
      return Data;
   }
}

