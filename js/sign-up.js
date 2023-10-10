let span = document.querySelector('.sign-up-result');
const eye=()=>{
    const openEye = document.getElementById('sign-up-img3');
    const closedEye = document.getElementById('sign-up-img4');
    const hidden = 'hidden';
    const display = 'show';

    if (openEye.classList.contains('hidden')) {
        openEye.classList.add(display);
        openEye.classList.remove(hidden);        
        closedEye.classList.add(hidden);
        closedEye.classList.remove(display);
        document.querySelector('.sign-up-inp2').type = 'password';
        document.querySelector('.sign-up-inp3').type = 'password';
      } else {
        closedEye.classList.add(display);
        closedEye.classList.remove(hidden);
        openEye.classList.add(hidden);
        openEye.classList.remove(display);
        document.querySelector('.sign-up-inp2').type = 'text';
        document.querySelector('.sign-up-inp3').type = 'text';       
      }
}

const validForm = () =>{
    var validRegex =  /^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let signUpform = document.forms["sign-up-form"];
    let fInput = signUpform["sign-up-fn"];
    let firstName = fInput.value;
    let lInput = signUpform["sign-up-ln"];
    let lastName = lInput.value;
    let eInput = signUpform["sign-up-email"];
    let email = eInput.value;
    let pInput = signUpform["sign-up-pw"];
    let password = pInput.value;
    let cpInput = signUpform["sign-up-cp"];
    let confirmPassword = cpInput.value;
    let checkInput = signUpform["sign-up-check"];
    let check = checkInput.checked;
    let validEmail = false;
    signUpform["submit"].setAttribute('disabled','true');
    if(typeof email !== 'undefined' || email){
        validEmail = email.match(validRegex);
    }
    if(!firstName){
        span.textContent = "Enter valid First Name";
        return false;
    }
    if(!lastName){
        span.textContent = "Enter valid Last Name";
        return false;
    }
    if(!validEmail){
        span.textContent = "Enter valid Email";
        return false;
    }
    if(!password){
        span.textContent = "Enter valid Password";
        return false;
    }
    if(password != confirmPassword){
        span.textContent = "Password does not match";
        return false;
    }
    else{
        span.textContent = "";
    }
   
    if(!check){
        return false;
    }

    span.textContent = '';
    signUpform["submit"].setAttribute('disabled','false');   
}



const callValid = ()=>{
    let form = document.forms["sign-up-form"];
    for(const field of form){
        if(field.type !== 'submit'){
            field.oninput = validForm;
        }
        
    }
}

callValid();