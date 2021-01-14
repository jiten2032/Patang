let btn = document.getElementById("SubmitBtn");
btn.addEventListener('click', MyBtn);
function MyBtn() {
    // console.log("Hi world")

    let input = document.getElementById("Input").value;
    let get = document.getElementById("GET").value;
    let post = document.getElementById("POST").value;
    let put = document.getElementById("PUT").value;
    if (get == "GET") {
        let response = new Response
        response.ResponseURL(input).then(function(MyData){
            let getdata = JSON.stringify(MyData);
            
            document.getElementById("PrismResponse").innerHTML = getdata ;
            // console.log(MyData)
        }).catch(function(error){
            document.getElementById("PrismResponse").innerHTML="Please enter a valid URL";

        })

    } else if (post == "POST") {
        console.log(input)

    } else if (put == "PUT") {
        console.log(input)
    }
    else{
        document.getElementById("PrismResponse").innerHTML="";
    }
}