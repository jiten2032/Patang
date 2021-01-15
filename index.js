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
}

// class PostResponse {

// }

// let post = new Response

// let postdata = {
//    userId: '1',
//    id: '1',
//    title: "my post",
//    body: "post-1"
//    }
//    post.POSTURL('https://jsonplaceholder.typicode.com/users',postdata).then(function(data){
//       console.log(data)
//    })