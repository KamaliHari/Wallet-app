function validateTextBox() {
    var x=document.login.uname.value;
    if (x=="") {
        alert("Please enter Name!");
        return false;
        
    }
    else{


    }
    var y= document.login.psw.value;
    if (y.length<6) {
        alert("Please enter Valid Password!");
        return false;
        
    }
    else{

    }
    
};