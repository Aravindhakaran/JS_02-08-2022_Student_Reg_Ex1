function myFunction(){
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let fathername = document.getElementById("fathername").value;
    let phonenumber = document.getElementById("phonenumber").value;
    let email = document.getElementById("email").value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value;
    //let gender = document.getElementsByClassName("sex").checked;
    let gender = document.querySelector('input[name="gender"]:checked');   
    let course = document.getElementById("course").value;
  

    if(fname==""){
        document.getElementById("error-fname").innerHTML = "First Name not be empty";
    }else{
        document.getElementById("error-fname").innerHTML = "";
    }
    if(lname==""){
        document.getElementById("error-lname").innerHTML = "Last Name not be empty";
    }else{
        document.getElementById("error-lname").innerHTML = "";
    }
    if(fathername==""){
        document.getElementById("error-fathername").innerHTML = "father Name not be empty";
    }else{
        document.getElementById("error-fathername").innerHTML = "";
    }
    if(phonenumber==""){
        document.getElementById("error-number").innerHTML = "Phone Number not be empty";
    }
    else{
        document.getElementById("error-number").innerHTML = "";
    }

    if(email == "" || atpos < 1 || ( dotpos - atpos < 2 )){
        document.getElementById("error-email").innerHTML = "Email not be empty"
    }
    else{
        document.getElementById("error-email").innerHTML = "";
    }
  
    if(dob==""){
        document.getElementById("error-dob").innerHTML = "Date of birth is must"
    }
    else{
        document.getElementById("error-dob").innerHTML = "";
    }
    if(address==""){
        document.getElementById("error-address").innerHTML = "Mention your Address"
    }
    else{
        document.getElementById("error-address").innerHTML = "";
    }
    if((gender==null)){
        document.getElementById("error-gender").innerHTML = "Select any one of this";
    }
    else{
        document.getElementById("error-gender").innerHTML =""; 
        gender= gender.value;
    }
    if(course==""){
        document.getElementById("error-course").innerHTML = "Select your Course";
    }
    else{
        document.getElementById("error-course").innerHTML = "";
    }
 
    let Result = {fname,lname,fathername,phonenumber,email,dob,address, gender,course};
    console.log(Result);
}
  