const stars=document.querySelectorAll('.star');
const current_rate =document.querySelector('.current-rate');

stars.forEach((star,index)=>{
    stars.addEventListener('click',()=>{

        let current_star=index+1;
          current_rate.innerText=`${current_star+1} of 5`;

          stars.forEach((star,i)=>{
             if(current_star>=i+1){
                star.innerHTML='&#9733;';
             }else{
                star.innerHTML='&#9734;';
             }
          });

  });
});