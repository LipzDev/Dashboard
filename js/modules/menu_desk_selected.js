export default function initSelectedMenu(){
   let menu = document.querySelectorAll('.menu-desktop li');

   menu.forEach((item) => {
      item.addEventListener('click', function(){

         let actived = document.querySelector('.actived');

         if(actived.classList.contains('actived')){
            actived.classList.remove('actived');
         }

         item.classList.add('actived');

      });
   });









}