let btn = document.getElementById("SubmitBtn");
btn.addEventListener('click', MyBtn);
function MyBtn() {
    // console.log("Hi world")
    RequestType = document.getElementById("RequestType");
    let Datainput = document.getElementById("DataInput").value;
    let input = document.getElementById("Input").value;


    let response = new Response
    if (RequestType.value == "GET") {

        response.GETURL(input).then(function (MyData) {
            let getdata = JSON.stringify(MyData);
            // console.log(getdata)
            document.getElementById("PrismResponse").innerHTML = getdata;

        }).catch(function (error) {
            document.getElementById("PrismResponse").innerHTML = "Please enter a valid URL";

        })

    } else if (RequestType.value == "POST") {
        console.log(Datainput)
        response.POSTURL(input, Datainput).then(function (responsedata) {
             
            console.log(responsedata)
        
        }).catch(function (error) {
            document.getElementById("PrismResponse").innerHTML = "Please enter a valid URL";

        })

    } else if (RequestType.value == "PUT") {
        console.log(input)
    }
    else {
        document.getElementById("PrismResponse").innerHTML = "";
    }
}