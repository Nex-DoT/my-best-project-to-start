window.addEventListener('load' , ()=>{
    const color = document.querySelector('.loading');
      color.classList.add('active');
    });
    
const slid = document.querySelector('#slid-01').children;
const mmls = document.querySelector('.crew').children;

for(m=0; m<mmls.length;m++){
  mmls[m].addEventListener('click' , function(){
    for(i=0; i<mmls.length; i++){
        mmls[i].classList.remove('active');
    }
    this.classList.add('active');




    const id = this.getAttribute('data-id');
    for(m=0; m<slid.length;m++){
        slid[m].classList.remove('active');
    }
    slid[id].classList.add('active')
    

  })
}