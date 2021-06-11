export default function validateInfo(values) {
    let errors = {}

    //Username
    if(!values.username.trim()){
        errors.username = "Username required"
    }

    //Email
    if(!values.email){
        errors.email = "Email required"
    }else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(values.email)){
        errors.email = "Email address is invalid";
    }

    //Password
    if(!values.password){
        errors.password = 'Password is required'
    }else if(values.password.length < 6){
        errors.password = 'Password needs to be 6 characters or more';
    }

    //Confirm Password
    if(!values.password2){
        errors.password2 = 'Password is required';
    }else if(values.password2 !== values.password){
        errors.password2 = 'Passwords not match';
    }
    return errors;
}