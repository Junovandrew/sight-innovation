let y = 0;
let active;  
let nav = document.querySelector('header');

const get_y =()=> {
    let tempY = window.document.pageYOffset || document.documentElement.scrollTop;
    return tempY;
}

const handleScroll = () =>{
    y = get_y();
    console.log(y,'y')
	if(y < 50){
	    nav.classList.remove('active');
	}
	else{
		nav.classList.add('active');
	}
}

window.onload = ()=>{
  y = get_y();
  handleScroll();
}

window.addEventListener('scroll',handleScroll);

