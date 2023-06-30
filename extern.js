function checkPassord(form){
    password1 = form.password1.value;
    password2 = form.password2.value;

    if(password1 == ''){
        alert("Please enter password!")
    } else if(password2 == ''){
        alert("Please confirm your password!")
    } else if(password1 != password2){
        alert("\n Password does not match, please try again.")
        return false;
    } else {
        alert("Passwords are a match! Too bad the sign up does not work...")
        return true;
    }
}