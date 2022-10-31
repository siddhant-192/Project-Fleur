function validateForm(){ 
    var name = document.getElementById('name');               
    var email = document.getElementById('email');    
    var phone = document.getElementById('phone');
    var age =  document.getElementById('age');

    if (name.value == "")                                  
    { 
        document.getElementById('errorname').innerHTML="Please enter a valid name";  
        name.focus(); 
        return false; 
    }else{
        document.getElementById('errorname').innerHTML="";  
    }
    
    if (email.value == "")                                   
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    }else{
        document.getElementById('erroremail').innerHTML="";  
    }

    if (email.value.indexOf("@", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 

    if (email.value.indexOf(".", 0) < 0)                 
    { 
        document.getElementById('erroremail').innerHTML="Please enter a valid email address"; 
        email.focus(); 
        return false; 
    } 

    if (phone.value == "")                           
    {
        document.getElementById('errorphone').innerHTML="Please enter a valid phone number"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errorphone').innerHTML="";  
    }

    if (phone.value.length != 10){
        document.getElementById('errorphone').innerHTML="Please enter a valid phone number"; 
        message.focus(); 
        return false;
    }else{
        document.getElementById('errorphone').innerHTML=""; 
    }

    if (age.value == "")                           
    {
        document.getElementById('errorage').innerHTML="Please enter a valid age"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errorage').innerHTML="";  
    }

    var age_int = parseInt(age,10)

    if (age_int<1 || age_int>100)                           
    {
        document.getElementById('errorage').innerHTML="Please enter a valid age"; 
        message.focus(); 
        return false; 
    }else{
        document.getElementById('errorage').innerHTML="";  
    }

    return true; 
}