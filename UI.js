let btn = document.getElementById("SubmitBtn");
btn.addEventListener('click', MyBtn);
function MyBtn() {
    // console.log("Hi world")
    RequestType = document.getElementById("RequestType");
    let Datainput = document.getElementById("DataInput").value;
    let input = document.getElementById("Input").value;

    let response = new Response;

    if (RequestType.value == "GET") {

        response.GETURL(input).then(function (MyData) {
            let getdata = JSON.stringify(MyData);
            // console.log(getdata)
            document.getElementById("PrismResponse").innerHTML = getdata;

        }).catch(function (error) {
            document.getElementById("PrismResponse").innerHTML = "Please enter a valid URL";

        })

    } else if (RequestType.value == "POST") {

        response.POSTURL(input, Datainput).then(function (MyPostData) {

            // console.log(postdata)
            document.getElementById("PrismResponse").innerHTML = MyPostData;

        }).catch(function (error) {
            document.getElementById("PrismResponse").innerHTML = "Please enter a valid URL";

        })
    } else if (RequestType.value == "PUT") {


        response.PUTURL(input, Datainput).then(function (MyPutData) {

            // console.log(postdata)
            document.getElementById("PrismResponse").innerHTML = MyPutData;

        }).catch(function (error) {
            document.getElementById("PrismResponse").innerHTML = "Please enter a valid URL";

        })
    }else if (RequestType.value == "PATCH") {


        response.PATCHURL(input, Datainput).then(function (MyPatchData) {

            // console.log(postdata)
            document.getElementById("PrismResponse").innerHTML = MyPatchData;

        }).catch(function (error) {
            document.getElementById("PrismResponse").innerHTML = "Please enter a valid URL";

        })
    }else if (RequestType.value == "DELET") {


        response.DELETURL(input).then(function (MyDeletData) {

            // console.log(postdata)
            document.getElementById("PrismResponse").innerHTML = MyDeletData;

        }).catch(function (error) {
            document.getElementById("PrismResponse").innerHTML = "Please enter a valid URL";

        })
    }
    else {
        document.getElementById("PrismResponse").innerHTML = "";
    }
}