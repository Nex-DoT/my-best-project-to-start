window.addEventListener('load' , ()=>{
const color = document.querySelector('.loading');
  color.classList.add('active');
});

const slid = document.querySelector('.number-1').children;
const list = document.querySelector('#number-2').children;


for(i=0 ; i<list.length;i++){
  list[i].addEventListener('click' , function(){
    for(g=0; g<list.length;g++){
      list[g].classList.remove('active');
    }
    this.classList.add('active');
    const id = this.getAttribute('data-id');
    for(l=0; l<slid.length;l++ ){
      slid[l].classList.remove('active');
    }
    slid[id].classList.add('active');
  })
};

