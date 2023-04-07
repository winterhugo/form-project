var currentTab = 0; // Current tab is first set to the first tab
showTab(currentTab); // Displays the current tab

function showTab(n) {
    // The function displays the requested tab:
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display ="none";
    }
    else {
        document.getElementById("prevBtn").style.display ="inline";
    }

    if ((x.length -1) == n) {
        document.getElementById("nextBtn") = "Submit";
    }
    else {
        document.getElementById("nextBtn") = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out what tab to display:
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field is invalid in the form
    if (n == 1 && !validateForm()) return false;
    // Hide current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease current tab by 1:
    currentTab += n;
    // When you reach the end of the form :
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }
    // Otherwise show the ccorrect tab:
    showTab(currentTab);
}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false
        valid = false;
      }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
      document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes / adds the active class;
    var i, x = document.getElementsByClassName("step");
    for (i = 0;i < x.length;i++) {
        x[i].className = x[i].className.replace(" active", "");
    }

    x[n].className += " active";
}



