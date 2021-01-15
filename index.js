class Response {
   async GETURL(url) {
      let ResponseData = await fetch(url, {
         method: 'GET',
      })
      let Data = await ResponseData.json();
      return Data;
   }
   async POSTURL(posturl, resdata) {
      let ResponsepostData = await fetch(posturl, {
         method: 'POST',
         body: JSON.stringify(resdata),
         headers: {
            'Content-type': 'application/json; charset=UTF-8'
         },
      });
      let Datapost = await ResponsepostData.json();
      return Datapost;
   }
}

// let post = new GetResponse

// let postdata = {
//    userId: '1',
//    id: '1',
//    title: "my post",
//    body: "post-1"
//    }
//    post.POSTURL('https://jsonplaceholder.typicode.com/users',postdata).then(function(data){
//       console.log(data)
//    })