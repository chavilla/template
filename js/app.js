"use strict";

window.addEventListener("load", () => {

  const url=window.location.href;

  //Scripts general para todas las páginas
  const menu = document.querySelector('.main-menu');
  const overlay= document.querySelector('#overlay');


  //Funciones para el menú
  
  function toggleMenu() {
    //Identifica el boton de salir y el menú
    const btnShowMenu = document.querySelector("#btnShowMenu");
    const btnExitMenu = document.querySelector("#exitMenu");
    
    btnExitMenu.addEventListener("click", () => {
     fadeOut(menu);
    });

    btnShowMenu.addEventListener("click", () => {
     fadeIn(menu);
     overlay.classList.add('overlay');
    });
  } // end toggleMenu

  function fadeOut(el){
    el.style.opacity = 1;
  
    (function fade() {
      if ((el.style.opacity -= .1) < 0) {
        el.style.display = "none";
      } else {
        requestAnimationFrame(fade);
      }
    })();
    overlay.classList.remove('overlay');
  };
  
  function fadeIn(el, display){
    el.style.opacity = 0;
    el.style.display = display || "block";
  
    (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
  };

  toggleMenu();

  // Zona de funciones anónimas
  window.onresize=function(e){
    const widthOfWindow=window.innerWidth;
    console.log(widthOfWindow);
    if (widthOfWindow>=768) {
      menu.style.display="block";
    }else{
      menu.style.display='none';
    }
  }

  //Oculta el menu cuando pulsamos afuera
  function exit(){
 
   overlay.addEventListener('click',(e)=>{

     if (menu.style.display=='block') {
       overlay.classList.remove('overlay');
       menu.style.display='none';
       menu.style.opacity=0;
     }
   })
 } 

 exit();

  //Scripts exlusivos de index
  
   const title = document.querySelector('#title');
   const btnMain= document.querySelector('#btnMain');
  
 

  if (url==='http://127.0.0.1:5500/index.html') {  
    
  //Oculta el título y muestra a los tres segundos
    setTimeout(()=>{
      btnMain.classList.remove('translate-right');
    },300);
  
  
    //efecto máquina de escribir
    function writing(str){
      let arrFromString=str.split('');
  
      let i=0;
      let printString=setInterval(()=>{
        title.innerHTML+=arrFromString[i];
  
        i++;
        if (i===arrFromString.length) {
          clearInterval(printString);
          
          setTimeout(() => {
            title.innerHTML='';
          writing(str);
          }, 5000);
        }
      },100);
  
    }
  
    writing('Innovación Y Precios Bajos');
  
    //Efectos para los recomendados y articulos de tienda
    const card=document.querySelectorAll(".card");
  
    card.forEach(element=>{
      let divInfo=element.children[1];
      element.addEventListener('mouseout',()=>{
        setTimeout(()=>{
  
          divInfo.classList.add('divdown');
          divInfo.classList.remove('divup');
        }, 3)
      });
  
      element.addEventListener('mouseover',()=>{
        let divInfo=element.children[1];
        setTimeout(()=>{
          divInfo.classList.add('divup');
          divInfo.classList.remove('divdown')
        }, 3)
      });
    });
  }

  if (url==='http://127.0.0.1:5500/index.html' || url==='http://127.0.0.1:5500/clothe.html' || url==='http://127.0.0.1:5500/furniture.html' ) {
     //menu options footer
     const desplegable=document.querySelectorAll('.icon-options');
     const options=document.querySelectorAll('.options');
   
     desplegable.forEach((elem,index)=>{
       elem.addEventListener('click', ()=>{
   
        if (options[index].classList.contains('hide-options')) {
           options[index].classList.remove('hide-options');
           options[index].classList.add('show-options'); 
   
         }
         else{
           options[index].classList.add('hide-options');
           options[index].classList.remove('show-options'); 
         }
       });
   
     });
  }

});
