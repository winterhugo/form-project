// Validity check 
function validateForm() {
    let elements = document.getElementsByClassName("input");
    let messages = document.getElementsByClassName("required-message");
    let x = 0;

    for (let i = 0; i < elements.length; i++) {
        // If a field is empty...
        if (elements[x].value == "") {
          // add an "input-invalid" class to the field:
          elements[x].classList.add("input-invalid");
          // add invalid message:
          messages[x].style.display = "inline";
        }
        else {
            elements[x].classList.remove("input-invalid");
            messages[x].style.display = "none";
        }
        x++;
    }

}



