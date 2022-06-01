function validate() {
    var x=document.signup.uname.value;
    if (x=="") {
        console.log("inside");
        alert("Please enter Name!");
        return false;
        
    }
    var y= document.signup.email.value;
    if (y=="") {
        alert("Please enter Valid email!");
        return false;
        
    }
    var z= document.signup.mobileno.value;
    if (z=="") {
        alert("Please enter Valid mobile!");
        return false;
        
    }    
    
};