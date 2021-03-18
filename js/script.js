function setError(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName("error")[0].innerHTML = error;
}

function validateForm() {
    var returnVal = true;
    var name = document.forms['myForm']['name'].value;
    let regex = /^([a-zA-Z]){2,12}\s([a-zA-Z]){2,12}$/;
    if (regex.test(name)) {
        
    }
    else{
        setError("name", "*Please enter a valid name");
        returnVal = false;
    }
    var message = document.forms['myForm']['message'].value;
    if(message.length<5){
        setError("message", "*Length of message is too short");
        returnVal = false;
    }
    return returnVal;

}