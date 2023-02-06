window.addEventListener('load' , ()=>{
    const color = document.querySelector('.loading');
      color.classList.add('active');
    });

const object = document.querySelector('.cr-3').children;
const slide = document.querySelector('.base-5').children;

for(i=0;i<object.length;i++){
    object[i].addEventListener('click', function(){
        for(m=0;m<object.length;m++){
            object[m].classList.remove('active');
        }
        this.classList.add('active');

        const id = this.getAttribute('data-id');
        for(c=0;c<slide.length;c++){
            slide[c].classList.remove('active');
        }
        slide[id].classList.add('active');
    })
}