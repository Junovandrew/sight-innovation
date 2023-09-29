let y = 0;
let active;  
let nav = document.querySelector('header');

const get_y =()=> window.document.pageYOffset || window.document.scrollTop;

const handleScroll = () =>{
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

window.addEventListner('scroll',handleScroll);

function showDialog(span,close){
    let parent = span.parentElement;
    let dialog = parent.children[1];
    if(close){
        dialog = parent.parentElement.children[1];
        dialog.close();
        return;
    }

    dialog.show();
}