const form=document.getElementById('form');
const Email=document.getElementById('Email');
const Password=document.getElementById('Password');
const Name=document.getElementById('Name');
const Phone=document.getElementById('Password');
const Subject=document.getElementById('Subject');
const Message=document.getElementById('Message');


form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log("LOGIN");
    if(Email.value===''){
       showerror(Email,'Please enter your email');
    }else if(!validateEmail(Email.value)){
        showerror(Email,'Incorrect email ');
    }else{
       showsuccess(Email);
    }
    if(Password.value===''){
        showerror(Password);
     }else{
        showsuccess(Password);
     }
});

function showerror(input,message){
   const formControl=input.parentElement;
   formControl.className='form-control error';
   const small=formControl.queryselector('small');
   small.innerText=message;
}

function showsuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

function validateEmail(email)  {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
}
