function validate()
{
    var username=document.getElementById('username').value
    var email=document.getElementById('email').value
    var password=document.getElementById('password').value
    var cpassword=document.getElementById('cpassword').value
    
    // checkusername(username)
    // checkemail(email)
    // checkpassword(password)
    // checkpasswordmatch(password , cpassword)
     

if(checkusername(username) == true &&  checkemail(email)== true && checkpassword(password)== true && checkpasswordmatch(password , cpassword)== true)
{
    document.getElementById('end').innerHTML="successfully submitted...!"
}

}
function checkusername(username)
{
    if(username.length>7)
    {
       document.getElementById('username').classList.add('success')
       document.getElementById('username').classList.replace('error' , 'success')
       document.getElementById('username_error').innerHTML=''
       return true;

    }
    else{  
       document.getElementById('username').classList.add('error')
       document.getElementById('username_error').innerText='username must be 8 letters long'
    }
}

function checkemail(email)
{
    if(email.length>8 && email.includes('@gmail.com'))
    {
       document.getElementById('email').classList.add('success')
       document.getElementById('email').classList.replace('error' , 'success')
       document.getElementById('email_error').innerHTML=''
       return true;


    }
    else{  
       document.getElementById('email').classList.add('error')
       document.getElementById('email_error').innerText='Email must include @gmail , 8 letters long'
    }
}

function checkpassword(password)
{
    if(password.length>8 && password.includes('.'))
    {
       document.getElementById('password').classList.add('success')
       document.getElementById('password').classList.replace('error' , 'success')
       document.getElementById('password_error').innerHTML=''
       return true;


    }
    else{  
       document.getElementById('password').classList.add('error')
       document.getElementById('password_error').innerText='Password must be 8 letters long with .'
    }
}

function checkpasswordmatch  (password , cpassword)
{
    if(password==cpassword && password!='')
    {
       document.getElementById('cpassword').classList.add('success')
       document.getElementById('cpassword').classList.replace('error' , 'success')
       document.getElementById('cpassword_error').innerHTML=''

    }
    else{  
        // alert("notmatch")
       document.getElementById('cpassword').classList.add('error')
       document.getElementById('cpassword-error').innerText='passwords should match'
    } 
}