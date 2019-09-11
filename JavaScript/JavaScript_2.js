function validateForm() {
    var validate = document.forms["first_Form"]["firstname"]["lastname"]["email"].value;
    if (validate == "") {
        alert("All fields must be filled out");
        return false;
    }
}