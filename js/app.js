"use strict";

window.addEventListener("load", () => {

  // Variables globales
  const menu = document.querySelector(".main-menu");
  const title = document.querySelector('#title');
  const btnMain= document.querySelector('#btnMain');

  function toggleMenu() {
    //Identifica el boton de salir y el menú
    const btnShowMenu = document.querySelector("#btnShowMenu");
    const btnExitMenu = document.querySelector("#exitMenu");
    

    btnExitMenu.addEventListener("click", () => {
     fadeOut(menu)
    });

    btnShowMenu.addEventListener("click", () => {
     fadeIn(menu);
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
    if (widthOfWindow>=768) {
      fadeOut(menu);
    }else{
      menu.style.display='none';
    }
  }


  //Oculta el título y muestra a los tres segundos
 

  setTimeout(()=>{
    btnMain.classList.remove('translate-right');
  },1000);


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
        }, 3000);
      }
    },200);

  }

  writing('Innovación y Precios bajos Con Chaviweb');
 

});
