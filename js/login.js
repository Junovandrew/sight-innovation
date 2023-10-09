const eye=()=>{
    const openEye = document.getElementById('login_img3');
    const closedEye = document.getElementById('login_img4');
    const hidden = 'hidden';
    const display = 'show';

    if (openEye.classList.contains('hidden')) {
        openEye.classList.add(display);
        openEye.classList.remove(hidden);        
        closedEye.classList.add(hidden);
        closedEye.classList.remove(display);
        document.querySelector('.login-inp1').type = 'password';
      } else {
        closedEye.classList.add(display);
        closedEye.classList.remove(hidden);
        openEye.classList.add(hidden);
        openEye.classList.remove(display);
        document.querySelector('.login-inp1').type = 'text';       
      }
}
