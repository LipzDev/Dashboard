export default function initdarkTheme(){

   let button = document.querySelector('.dark-theme');
   let bgColor = document.querySelector(':root');
   let iconSol = 'sun';
   let buttonIcon = document.querySelector('.dark-theme i');

   button.addEventListener('click', function(){
      button.classList.toggle('dark');

      if(button.classList.contains('dark')){
         bgColor.style="--cor-texto-roxo: #e9e9e9; --cor-texto-cinza: #e9e9e9; --cor-texto-hover: rgb(141, 141, 141); --cor-sombra-cinza: rgb(0, 0, 0, 0.6);--cor-sombra-branco: rgb(36, 37, 43, 0.7);  --cor-bg-branco: #2a2c36;  --cor-fundo-branco: #202633;";

         let moonToSun = buttonIcon.getAttribute('class').replace('moon', iconSol);
         buttonIcon.setAttribute('class',moonToSun);
         button.setAttribute('title', 'Light mode');

      } else {
         bgColor.style="--cor-texto-roxo: #D478FF;--cor-texto-cinza: rgb(163, 163, 163);    --cor-texto-hover: rgb(83, 86, 90);       --cor-fundo-branco: #f8f8f8; --cor-bg-branco: #F1F2F6;  --cor-sombra-cinza: #ccc; --cor-sombra-branco: white;";

         buttonIcon.setAttribute('class','fas fa-moon');
         button.setAttribute('title', 'Dark mode');
      }
     

     
   });
}